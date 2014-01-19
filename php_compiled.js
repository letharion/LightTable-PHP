if(!lt.util.load.provided_QMARK_('lt.plugins.php')) {
goog.provide('lt.plugins.php');
goog.require('cljs.core');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.js');
goog.require('lt.objs.tabs');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('lt.util.js');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.command');
lt.plugins.php.php = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.php","php-lang","lt.plugins.php/php-lang",4117308930));
lt.plugins.php.hello_panel = (function hello_panel(this$){var e__8100__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello from php 4"], null));var seq__8190_8209 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8191_8210 = null;var count__8192_8211 = 0;var i__8193_8212 = 0;while(true){
if((i__8193_8212 < count__8192_8211))
{var vec__8194_8213 = cljs.core._nth.call(null,chunk__8191_8210,i__8193_8212);var ev__8101__auto___8214 = cljs.core.nth.call(null,vec__8194_8213,0,null);var func__8102__auto___8215 = cljs.core.nth.call(null,vec__8194_8213,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8214,func__8102__auto___8215);
{
var G__8216 = seq__8190_8209;
var G__8217 = chunk__8191_8210;
var G__8218 = count__8192_8211;
var G__8219 = (i__8193_8212 + 1);
seq__8190_8209 = G__8216;
chunk__8191_8210 = G__8217;
count__8192_8211 = G__8218;
i__8193_8212 = G__8219;
continue;
}
} else
{var temp__4092__auto___8220 = cljs.core.seq.call(null,seq__8190_8209);if(temp__4092__auto___8220)
{var seq__8190_8221__$1 = temp__4092__auto___8220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8190_8221__$1))
{var c__7486__auto___8222 = cljs.core.chunk_first.call(null,seq__8190_8221__$1);{
var G__8223 = cljs.core.chunk_rest.call(null,seq__8190_8221__$1);
var G__8224 = c__7486__auto___8222;
var G__8225 = cljs.core.count.call(null,c__7486__auto___8222);
var G__8226 = 0;
seq__8190_8209 = G__8223;
chunk__8191_8210 = G__8224;
count__8192_8211 = G__8225;
i__8193_8212 = G__8226;
continue;
}
} else
{var vec__8195_8227 = cljs.core.first.call(null,seq__8190_8221__$1);var ev__8101__auto___8228 = cljs.core.nth.call(null,vec__8195_8227,0,null);var func__8102__auto___8229 = cljs.core.nth.call(null,vec__8195_8227,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8228,func__8102__auto___8229);
{
var G__8230 = cljs.core.next.call(null,seq__8190_8221__$1);
var G__8231 = null;
var G__8232 = 0;
var G__8233 = 0;
seq__8190_8209 = G__8230;
chunk__8191_8210 = G__8231;
count__8192_8211 = G__8232;
i__8193_8212 = G__8233;
continue;
}
}
} else
{}
}
break;
}
return e__8100__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.php","php.hello","lt.plugins.php/php.hello",746296891),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"php.hello","php.hello",3338383438)], null),new cljs.core.Keyword(null,"name","name",1017277949),"php",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.php.hello_panel.call(null,this$);
}));
lt.plugins.php.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8234 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8234))
{var ts_8235 = temp__4092__auto___8234;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8235))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8235);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.php","on-close-destroy","lt.plugins.php/on-close-destroy",2661293982),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.php.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.php.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.php","php.hello","lt.plugins.php/php.hello",746296891));
lt.plugins.php.hello2 = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.php","php.hello","lt.plugins.php/php.hello",746296891));
lt.plugins.php.server_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"php-src");
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.php","say-hello","lt.plugins.php/say-hello",1823164631),new cljs.core.Keyword(null,"desc","desc",1016984067),"php: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.php.hello);
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"/usr/bin/php",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(lt.plugins.php.server_path),cljs.core.str("/php-lt-client.php")].join(''),lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,lt.plugins.php.client)], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.plugins.php.server_path,new cljs.core.Keyword(null,"env","env",1014004831),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
lt.plugins.php.__BEH__on_eval = (function __BEH__on_eval(editor){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"code","code",1016963423),watches.watched_range.call(null,editor,null,null,lt.plugins.php.php_watch))], null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.php","on-eval","lt.plugins.php/on-eval",4465210793),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.php.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.php.__BEH__connect = (function __BEH__connect(this$,path){return lt.plugins.php.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.php","connect","lt.plugins.php/connect",2057556553),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.php.__BEH__connect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.php.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){return "Done more stuff";
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.php","eval!","lt.plugins.php/eval!",2704928868),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.php.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"PHP",new cljs.core.Keyword(null,"desc","desc",1016984067),"Select a directoy to serve as the root of your PHP project.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.dir.call(null,lt.plugins.php.php,new cljs.core.Keyword(null,"connect","connect",1965255772));
})], null));
lt.plugins.php.try_connect = (function try_connect(p__8196){var map__8198 = p__8196;var map__8198__$1 = ((cljs.core.seq_QMARK_.call(null,map__8198))?cljs.core.apply.call(null,cljs.core.hash_map,map__8198):map__8198);var info = cljs.core.get.call(null,map__8198__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = client.client_BANG_.call(null,new cljs.core.Keyword(null,"php.client","php.client",4216505459));return lt.plugins.php.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
});
lt.plugins.php.check_all = (function check_all(obj){return lt.plugins.php.notify.call(null,lt.plugins.php.find_project.call(null,lt.plugins.php.check_client.call(null,lt.plugins.php.check_php.call(null,lt.plugins.php.find_venv.call(null,obj)))));
});
}

//# sourceMappingURL=php_compiled.js.map