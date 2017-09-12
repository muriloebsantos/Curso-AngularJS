<?php
/**
 * Created by Erik Figueiredo.
 * Email: falecom@erikfigueiredo.com.br
 * Date: 05/12/14
 * Time: 18:41
 */

require_once 'bootstrap.php';

use Doctrine\ORM\Tools\Console\ConsoleRunner;

$doctrine = $bootstrap->loadDoctrineOrm();
$entityManager = $doctrine->getEntityManager();

return ConsoleRunner::createHelperSet($entityManager);