<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\NavidadRepositorio;

class Navidad1Controller
{ 
  public function ejercicio1()
  { 
    $suma=(new NavidadRepositorio) -> suma($_POST['numero1'],$_POST['numero2']);
    $resta=(new NavidadRepositorio) -> resta($_POST['numero1'],$_POST['numero2']);
    $multiplicacion=(new NavidadRepositorio) -> multiplicacion($_POST['numero1'],$_POST['numero2']);
    $division=(new NavidadRepositorio) -> division($_POST['numero1'],$_POST['numero2']);
    require __DIR__ . '/../../app/plantillas/navidad1.php';

}
}
