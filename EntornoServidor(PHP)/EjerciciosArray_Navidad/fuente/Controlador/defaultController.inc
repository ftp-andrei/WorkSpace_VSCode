<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
/** Gregorio añade aqui el repo de Pasajero,Usuario y AppException */
use app\iberia\repositorio\Ejercicio1Repositorio;

class DefaultController
{ 
  public function inicio()
  { 
    if(isset($_POST['btnCambio'])){
    $euros = (new Ejercicio1Repositorio()) -> cambioPesetas($_POST('euros'));
  }
  require __DIR__ . '/../../app/plantillas/inicio.php';
}
}
