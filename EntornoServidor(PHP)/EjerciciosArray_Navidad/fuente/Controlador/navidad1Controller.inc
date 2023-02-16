<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Navidad1Repositorio;

class Navidad1Controller
{ 
  public function ejercicio1()
  { 
    require __DIR__ . '/../../app/plantillas/navidad1.php';

}
}
