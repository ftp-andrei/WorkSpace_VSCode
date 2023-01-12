<?php

namespace app\educacion\agenda\fuente\controlador;

use app\educacion\agenda\fuente\repositorio\vueloRepositorio;

class vuelosController
{
    public function listaVuelo()
    {
        require_once __DIR__ . '/../Repositorio/vueloRepositorio.inc';
        try {
            $listasVuelos = (new vueloRepositorio()) -> mostrarVuelo();
            include __DIR__ . '/../../app/plantillas/listaVuelos.inc';
        } catch (\PDOException $ex) {
            $error = $ex ->getMessage();
            $codigo -> $ex ->getCode();
        }
        include __DIR__ . '/../../app/plantillas/listaVuelos.inc';
    }
}
