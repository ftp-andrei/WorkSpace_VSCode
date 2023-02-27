<?php
namespace app\iberia\controlador;
use app\iberia\modelo\Pasajero;
use app\iberia\repositorio\VuelosRepositorio;
use app\iberia\repositorio\PasajeroRepositorio;
class VuelosController
{
  public function reservaAsientos(bool $vuelta=false)
  {
    define('A', 32);
    define('B', 16);
    define('C', 8);
    define('D', 4);
    define('E', 2);
    define('F', 1);
    $arrAsientos=['A'=>A,'B'=>B,'C'=>C,'D'=>D,'E'=>E,'F'=>F,];

    $pasjPrincipal=unserialize($_SESSION['pasajero']);
    $pasajeros=(new PasajeroRepositorio())->findPasajerosUsuario($pasjPrincipal->getIdUsuario());
    if(!$vuelta){
      $origen=$_SESSION['viaje']['origen'];
      $destino=$_SESSION['viaje']['destino'];
      $vuelo=$_SESSION['viaje']['avionIda'];
      $fecha=$_SESSION['viaje']['fIda'];
      $ocupVuelo=(new VuelosRepositorio())->ocupacionVuelo($_SESSION['viaje']['avionIda'], $_SESSION['viaje']['fIda']);
    } else {
      $origen=$_SESSION['viaje']['destino'];
      $destino=$_SESSION['viaje']['origen'];
      $vuelo=$_SESSION['viaje']['avionVuelta'];
      $fecha=$_SESSION['viaje']['fVuelta'];
      $ocupVuelo=(new VuelosRepositorio())->ocupacionVuelo($_SESSION['viaje']['avionVuelta'], $_SESSION['viaje']['fVuelta']);
    }
    if(isset($_POST['ok'])){
      $plazas=$_POST['asiento'];
      $vuelos=['codigo'=>$vuelo, 'fecha'=>$fecha,];
      foreach($plazas as $fila => $asientos){
        $ocupacionFila=0;
        foreach($asientos as $asiento => $pasajero){
          $viaje[]=['idPasajero'=>(int)$pasajero, 'codigo'=>$vuelo, 'fecha'=>$fecha, 'fila'=>$fila, 'asiento'=>$asiento,];
          $ocupacionFila+=$arrAsientos[$asiento];
        }
        $vuelos['filas'][$fila]=['actual'=>$ocupacionFila,'anterior'=>(int)$_POST['fila'][$fila]];
      }
      if((new VuelosRepositorio())->ocupaAsientos($vuelos, $viaje)){
        if(!$vuelta){
          header('Location: index.php?ctl=ocupaAsientos&vuelta=true');
        } else {
          header('Location: index.php');
        }
      }
    }
    include __DIR__.'../../../app/plantillas/ocupaAsientos.inc';
  }

  public function  asignaPasajeros()
  {

  }
}