<?php

date_default_timezone_set('America/Sao_Paulo');

header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("application/x-www-form-urlencoded");

include 'bootstrap.php';

/** SILEX **/

$app = new Silex\Application;
$app['debug'] = $isDevMode;

$app->register(new Silex\Provider\TwigServiceProvider(),array(
    'twig.path' => 'view',
));
$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

/** INTEGRAR O DOCTRINE **/

$app['em'] = $app->share(function() use ($doctrine){
    return $doctrine->getEntityManager();
});

/** CONTROLLER **/

$usuarios_controller = new CursoAngularJs\Controllers\Controller\UsuariosController();

$app->mount('/usuarios', $usuarios_controller->getController());

/** RODAR O SILEX **/

$app->run();