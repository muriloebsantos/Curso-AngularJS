<?php
/**
 * Created by Erik Figueiredo.
 * Email: falecom@erikfigueiredo.com.br
 * Date: 14/12/14
 * Time: 12:23
 */

namespace CursoAngularJs\Entities;

use \Doctrine\ORM\Mapping as ORM;

/**
 * @Entity @Table(name="usuarios")
 **/
class Usuario
{
    /**
     * @Id
     * @Column(type="integer")
     * @GeneratedValue
     **/
    protected $id;

    /**
     * @Column(type="string")
     **/
    protected $nome;

    /**
     * @Column(type="string")
     **/
    protected $email;

    /**
     * @Column(type="string")
     **/
    protected $genero;

    /**
     * @Column(type="integer")
     **/
    protected $idade;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    public function getGenero()
    {
        return $this->genero;
    }

    public function setGenero($genero)
    {
        $this->genero = $genero;

        return $this;
    }

    public function getIdade()
    {
        return $this->idade;
    }

    public function setIdade($idade)
    {
        $this->idade = $idade;

        return $this;
    }

    public function toArray()
    {
        return array(
            'nome'=>$this->getNome(),
            'email'=>$this->getEmail(),
            'genero'=>$this->getGenero(),
            'idade'=>$this->getIdade()
        );
    }
} 