<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Arrays1Repositorio;

class DefaultController
{ 
  public function ejercicio1()
  {
    if(isset($_POST['btnCambio'])){
      if(empty($_POST['euros']) || !is_numeric($_POST['euros'])){
        $_POST['euros']=0;
      }
      $euros= (new Arrays1Repositorio()) -> cambioDivisa($_POST['euros']);
  }
  $tablaPesetas = (new Arrays1Repositorio()) -> tablaPesetas();
  require __DIR__ . '/../../app/plantillas/arrays1.php';
}
}
