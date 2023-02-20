<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\NavidadRepositorio;

class Navidad3Controller
{ 
  public function ejercicio3()
  { 
    require __DIR__ . '/../../app/plantillas/navidad3.php';

}
}
