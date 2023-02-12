<?php
namespace app\iberia\controlador;
use app\iberia\repositorio\PasajeroRepositorio;

class PasajeroController
{ 
    public function reservar()
    {
      if(isset($_POST['ok'])){
      //Se añade la ruta ya en el index
     // require_once __DIR__.'/../Repositorio/VuelosRepositorio.inc';
      $vuelos = (new PasajeroRepositorio()) -> reservar($_POST['salida'],$_POST['destino'],$_POST['ida'],$_POST['vuelta']);
    }
    require __DIR__ . '/../../app/plantillas/reservar.php';
    }
}

    