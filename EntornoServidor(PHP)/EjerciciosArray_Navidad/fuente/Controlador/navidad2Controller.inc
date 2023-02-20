<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\NavidadRepositorio;

class Navidad2Controller
{ 
  public function ejercicio2()
  { 
    $volumen = (new NavidadRepositorio) -> calcVolumen($_POST['numero1'],$_POST['numero2']);
    require __DIR__ . '/../../app/plantillas/navidad2.php';

}
}
