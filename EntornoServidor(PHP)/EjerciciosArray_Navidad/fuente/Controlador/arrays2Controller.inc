<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Arrays2Repositorio;

class Arrays2Controller
{ 
  public function ejercicio2()
  { 
    require __DIR__ . '/../../app/plantillas/arrays2.php';

}
}
