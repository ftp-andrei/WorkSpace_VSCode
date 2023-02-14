<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
/** Gregorio añade aqui el repo de Pasajero,Usuario y AppException */
use app\iberia\repositorio\VuelosRepositorio;

// Solo deja el vuelos repositorio

// Ejemplo de controlador para página home de la aplicación
class DefaultController
{ 
  public function inicio()
  { 
    if(isset($_POST['ok'])){
    //Se añade la ruta ya en el index
   // require_once __DIR__.'/../Repositorio/VuelosRepositorio.inc';
    $vuelos = (new VuelosRepositorio()) -> findVuelos($_POST['salida'],$_POST['destino'],$_POST['ida'],$_POST['vuelta']);
    // Añade los pasajeros dentro del post
  }
  require __DIR__ . '/../../app/plantillas/inicio.php';
}
}
