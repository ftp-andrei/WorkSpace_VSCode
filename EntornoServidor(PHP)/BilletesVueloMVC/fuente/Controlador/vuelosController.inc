<?php

namespace app\educacion\agenda\fuente\controlador;

class vuelosController
{
    /* Funciones controlador vuelo */
    public function mostrarVuelo()
    {
            include __DIR__ . '/../../app/plantillas/mostrarVuelo.inc';
    }

    public function mostrarTodos()
    {
            include __DIR__ . '/../../app/plantillas/mostrarTodos.inc';
    }

    public function comprar()
    {
            include __DIR__ . '/../../app/plantillas/comprar.inc';
    }
}
