<?php

require_once 'vendor/autoload.php';

use Aura\Cli\AbstractCommand;
use Aura\Cli\Context;
use Aura\Cli\ExceptionFactory;
use Aura\Cli\Getopt;
use Aura\Cli\OptionFactory;
use Aura\Cli\Signal;
use Aura\Cli\Stdio;
use Aura\Cli\StdioResource;
use Aura\Cli\Translator;
use Aura\Cli\Vt100;
use Aura\Cli\Option;

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

class LightTableClient extends AbstractCommand {
  private $debug;

  protected $options = [
    'debug' => [
      'long'    => 'debug',
      'param'   => Option::PARAM_OPTIONAL,
      'multi'   => false,
      'default' => false,
    ],
  ];

  public function __construct($Context, $Stdio, $Opts, $Signal, $Logger = NULL) {
    parent::__construct($Context, $Stdio, $Opts, $Signal);
  }

  protected function debug($msg) {
    static $log;

    if (!$this->debug) {
      return;
    }

    if ($log === NULL) {
      $log = new Logger('php-lt-client');
      $log->pushHandler(new StreamHandler(__DIR__ . '/logfile.txt', Logger::DEBUG));
    }

    $log->addInfo($msg);
  }

  public function action() {
    $this->debug = $this->getopt->debug;

    $this->debug('Running LightTableClient with parameters ' . print_r($this->params, TRUE));

    $loop = React\EventLoop\Factory::create();

    $dnsResolverFactory = new React\Dns\Resolver\Factory();
    $dns = $dnsResolverFactory->createCached('8.8.8.8', $loop);

    $connector = new React\SocketClient\Connector($loop, $dns);

    list(, $adress, $port, $client_id) = $this->params;

    $client = [
      'name' => 'php-client',
      'client-id' => $client_id,
      'dir' => getcwd(),
      'commands' => [
        'editor.eval.php'
      ],
      'type' => 'php'
    ];

    $this->debug('Client: ' . print_r($client, TRUE));
    $connector->create('127.0.0.1', $port)->then(function (React\Stream\Stream $stream) {
      $this->debug('Connected and stuff');
      $stream->write('Connected');
      $stream->write(json_encode($client));
      $stream->on('data', function($data) use ($stream) {
        $this->debug(print_r($data, TRUE));
      });
      $stream->close();
    });
  }
}

// instantiate
$command = new LightTableClient(
    new Context($GLOBALS),
    new Stdio(
        new StdioResource('php://stdin', 'r'),
        new StdioResource('php://stdout', 'w+'),
        new StdioResource('php://stderr', 'w+'),
        new Vt100
    ),
    new Getopt(
        new OptionFactory,
        new ExceptionFactory(
            new Translator(
                include __DIR__ . '/vendor/aura/cli/intl/en_US.php'
            )
        )
    ),
    new Signal
);

// execute
$command->exec();
