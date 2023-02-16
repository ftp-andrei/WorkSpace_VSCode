<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Navidad4Repositorio;

class Navidad4Controller
{ 
  public function ejercicio4()
  { 
    require __DIR__ . '/../../app/plantillas/navidad4.php';

}
}
