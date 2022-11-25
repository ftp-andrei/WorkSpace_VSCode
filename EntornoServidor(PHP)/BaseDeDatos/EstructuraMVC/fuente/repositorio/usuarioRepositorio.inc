<?php

namespace app\agenda\fuente\repositorio;
//Hacemos referencia a la clase Usuario del archivo modelo/usuario.inc para crear un objeto.
use app\agenda\fuente\modelo\Usuario;
// Si no usamos use, hay que crearlo asi.
include __DIR__.'/../modelo/usuario.inc';
$obj = new Usuario();
