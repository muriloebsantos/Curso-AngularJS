<?php
/**
 * Created by Erik Figueiredo.
 * Email: falecom@erikfigueiredo.com.br
 * Date: 05/12/14
 * Time: 18:40
 */

require 'vendor/autoload.php';

date_default_timezone_set('America/Sao_paulo');

$isDevMode = true;

$conn = array(
    'driver' => 'pdo_mysql',
    'user'=>'root',
    'password'=>'',
    'dbname'=>'treina_w_doctrine'
);

$config = Setup::createAnnotationMetadataConfiguration(array(__DIR__."/src/Entities"), $isDevMode);
$entityManager = EntityManager::create($conn, $config);