(ns lt.plugins.php
  (:require
    [lt.object               :as object]
    [lt.objs.clients         :as clients]
    [lt.objs.clients.tcp     :as tcp]
    [lt.objs.command         :as cmd]
    [lt.objs.console         :as console]
    [lt.objs.dialogs         :as dialogs]
    [lt.objs.files           :as files]
    [lt.objs.notifos         :as notifos]
    [lt.objs.plugins         :as plugins]
    [lt.objs.proc            :as proc]
    [lt.objs.sidebar.clients :as scl]
    [lt.objs.tabs            :as tabs]
    [lt.util.js              :as util]
  )
  (:require-macros [lt.macros :refer [defui behavior]])
)

(def php (object/create ::php-lang))

(defui hello-panel [this]
  [:h1 "Hello from php 4"])

(object/object* ::php.hello
                :tags [:php.hello]
                :name "php"
                :init (fn [this]
                        (hello-panel this)))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::php.hello))
(def hello2 (object/create ::php.hello))

(def server-path (files/join plugins/*plugin-dir* "php-src" ))

(cmd/command {
  :command ::say-hello
  :desc "php: Say Hello"
  :exec (fn []
    (tabs/add-or-focus! hello)
    (proc/exec {
      :command "/usr/bin/php"
      :args [ (str server-path "/php-lt-client.php") tcp/port (clients/->id client) ]
      :cwd server-path
      :env {}
    })
  )
})

(behavior ::on-eval
  :triggers #{:eval}
  :reaction (fn [editor]
    notifos.working "Doing awesome"
    object/raise php :eval! {
      :origin editor
      :info (
        assoc (@editor :info)
        :code (watches/watched-range editor nil nil php-watch)
      )
    }
  )
)

(behavior ::connect
  :triggers #{:connect}
  :reaction (fn [this path]
    (try-connect {:info {:path path }})
  )
)

(behavior ::eval!
  :triggers #{:eval}
  :reaction (fn [this event]
    notifos.working "Done more stuff"
  )
)

;; Connection
(scl/add-connector {
  :name "PHP"
  :desc "Select a directoy to serve as the root of your PHP project."
  :connect (fn []
    (dialogs/dir php :connect)
  )
})

(defn try-connect [{:keys [info]}]
  (
    let [
      path (:path info)
      client (client/client! :php.client)
    ]
    (check-all {:path path :client client})
  )
)

(defn check-all [obj]
  (-> obj
    (find-venv)
    (check-php)
    (check-client)
    (find-project)
    (notify)
  )
)
