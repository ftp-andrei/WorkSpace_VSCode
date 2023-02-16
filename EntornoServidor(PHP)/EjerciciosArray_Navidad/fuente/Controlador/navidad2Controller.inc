<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Navidad2Repositorio;

class Navidad2Controller
{ 
  public function ejercicio2()
  { 
    require __DIR__ . '/../../app/plantillas/navidad2.php';

}
}
