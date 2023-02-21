<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\ejercicios\controlador;
use app\ejercicios\repositorio\ClienteRepositorio;

class ClienteController
{ 
  public function ejercicio3()
  { 

    require __DIR__ . '/../../app/plantillas/navidad3.php';

}
}
