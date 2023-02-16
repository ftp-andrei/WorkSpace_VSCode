<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Arrays3Repositorio;

class Arrays3Controller
{ 
  public function ejercicio3()
  { 
    $diccionario = (new Arrays3Repositorio()) -> getDiccionario();
    require __DIR__ . '/../../app/plantillas/arrays3.php';

}
}
