<?php
use Doctrine\ORM\Tools\Console\ConsoleRunner;

include 'bootstrap.php';

$entityManager = $doctrine->getEntityManager();

return ConsoleRunner::createHelperSet($entityManager);