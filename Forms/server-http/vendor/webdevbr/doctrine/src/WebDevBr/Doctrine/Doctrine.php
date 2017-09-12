<?php
/**
 * Created by Erik Figueiredo.
 * Email: falecom@erikfigueiredo.com.br
 * Date: 05/12/14
 * Time: 18:43
 */

namespace WebDevBr\Doctrine;

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

class Doctrine
{
    private $isDevMode, $conn, $entities_dir;

    public function __construct(Array $conn, $isDevMode = false)
    {
        $this->conn = $conn;
        $this->isDevMode = $isDevMode;
    }

    public function setEntitiesDir($entities_dir)
    {
        $this->entities_dir = $entities_dir;
    }

    public function getEntityManager()
    {
        $config = Setup::createAnnotationMetadataConfiguration(array($this->entities_dir), $this->isDevMode);
        return EntityManager::create($this->conn, $config);
    }

}