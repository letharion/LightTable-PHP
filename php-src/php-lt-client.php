<?php

require_once 'vendor/autoload.php';

$loop = React\EventLoop\Factory::create();

$dnsResolverFactory = new React\Dns\Resolver\Factory();
$dns = $dnsResolverFactory->createCached('8.8.8.8', $loop);

$connector = new React\SocketClient\Connector($loop, $dns);

file_put_contents('log', print_r($argv, TRUE));

$port = $argv[1];
$client_id = $argv[2];

$client = [
  'name' => 'php-client',
  'client-id' => $client_id,
  'dir' => getcwd(),
  'commands' => [
    'editor.eval.php'
  ],
  'type' => 'php'
];

file_put_contents('log', print_r($client, TRUE), FILE_APPEND);
$connector->create('127.0.0.1', $port)->then(function (React\Stream\Stream $stream) {
  file_put_contents('log', 'Connected and stuff', FILE_APPEND);
  $stream->write('Connected');
  $stream->write(json_encode($client));
  $stream->on('data', function($data) use ($stream) {
    file_put_contents('log', print_r($data, TRUE), FILE_APPEND);
  });
  $stream->close();
});

/*
$loop = React\EventLoop\Factory::create();
$socket = new React\Socket\Server($loop);

$socket->on('connection', function ($c) {
  $c->write("Hello LT!\n");

  $c->on('data', function ($data) use ($c) {
    $c->close();
  });
});

$socket->listen(1337);
$loop->run();
 */
