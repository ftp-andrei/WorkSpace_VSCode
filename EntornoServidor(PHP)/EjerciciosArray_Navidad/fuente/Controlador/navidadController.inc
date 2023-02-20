<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\ejercicios\controlador;
use app\ejercicios\repositorio\NavidadRepositorio;

class NavidadController
{ 
  public function ejercicio1()
  { 
if(isset($_POST['ok'])){
  $suma=(new NavidadRepositorio) -> suma($_POST['numero1'],$_POST['numero2']);
  $resta=(new NavidadRepositorio) -> resta($_POST['numero1'],$_POST['numero2']);
  $multiplicacion=(new NavidadRepositorio) -> multiplicacion($_POST['numero1'],$_POST['numero2']);
  $division=(new NavidadRepositorio) -> division($_POST['numero1'],$_POST['numero2']);
}
require __DIR__ . '/../../app/plantillas/navidad1.php';
  }

  public function ejercicio2()
  { 
    if(isset($_POST['okVolumen'])){
      $volumen=(new NavidadRepositorio) -> calcVolumen($_POST['num1'],$_POST['num2']);
      
    }
    require __DIR__ . '/../../app/plantillas/navidad2.php';
  }
  
}
