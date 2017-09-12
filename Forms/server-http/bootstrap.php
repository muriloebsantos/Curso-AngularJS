<?php

include 'vendor/autoload.php';

/** DOCTRINE **/

use WebDevBr\Doctrine\Doctrine;

$isDevMode = true;
$conn = [
    'driver'=>'pdo_mysql',
    'user'=>'root',
    'password'=>'',
    'dbname'=>'curso_angularjs_cs',
    'charset'=>'UTF8'
];
$doctrine = new Doctrine($conn, $isDevMode);
$doctrine->setEntitiesDir('src/CursoAngularJs/Entities');