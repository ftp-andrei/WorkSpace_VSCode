<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Arrays5Repositorio;

class Arrays5Controller
{ 
  public function ejercicio5()
  { 
    require __DIR__ . '/../../app/plantillas/arrays5.php';

}
}
