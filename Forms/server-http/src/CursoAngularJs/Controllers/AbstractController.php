<?php

namespace CursoAngularJs\Controllers;

class AbstractController
{
    protected $app, $request, $response, $controller;

    public function __construct()
    {
        $app = new \Silex\Application;
        $this->controller = $app['controllers_factory'];
    }

    public function getController()
    {
        $this->createActions();
        return $this->controller;
    }
}