<?php

use CursoAngularJs\Entities\Usuario;

namespace CursoAngularJs\Controllers\Controller;

class UsuariosController extends \CursoAngularJs\Controllers\AbstractController
{
    protected $app, $request, $response, $controller;

    protected function createActions()
    {

        $this->controller->get('/', function(\Silex\Application $app) {
            $em = $app['em'];
            $result = $em->getRepository('CursoAngularJs\Entities\Usuario')
                ->findBy(array(), array('id'=>'DESC'), 1);
            if (isset($result[0]))
                return $app->json($result[0]->toArray());
            return $app->json($result);
        });

        $this->controller->match('/save', function(\Silex\Application $app, \Symfony\Component\HttpFoundation\Request $request) {
            $data = $request->request->all();
            $data = array_keys($data);
            $data = json_decode($data[0]);
            
            $em = $app['em'];

            $usuario = new \CursoAngularJs\Entities\Usuario();

            $usuario->setNome($data->form->nome)
                ->setEmail($data->form->email)
                ->setGenero($data->form->genero)
                ->setIdade($data->form->idade);

            $em->persist($usuario);
            $em->flush();

            return $app->json($data);
        })->method('POST|OPTIONS')->bind('save');
    }

}