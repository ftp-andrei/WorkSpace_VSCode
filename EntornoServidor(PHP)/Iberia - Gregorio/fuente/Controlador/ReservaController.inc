<?php
namespace app\iberia\controlador;

use app\iberia\modelo\AppException;
use app\iberia\repositorio\VuelosRepositorio;
use app\iberia\modelo\Pasajero;
use app\iberia\repositorio\PasajeroRepositorio;

class ReservaController
{
  public function inicioReserva()
  {
    var_dump($_SESSION);
    var_dump($_POST);
    if(isset($_POST['ConfVuelos'])){
      $codIda=key($_POST['vueloIda']);
      $_SESSION['viaje']['avionIda']=$codIda;
      $horaIda=key($_POST['vueloIda'][$codIda]);
      $_SESSION['viaje']['horaIda']=$horaIda;
      $numPasaj=(int)$_SESSION['viaje']['adultos']+(int)$_SESSION['viaje']['peques'];
      try {
        if(!(new VuelosRepositorio)->
          reservaPlazas($numPasaj, $codIda,$_SESSION['viaje']['fIda'])){
          $mensajerError='No ha sido posible realizar la reserva';
        }
        if(isset($_POST['vueloVuelta'])){
          $codVuelta=key($_POST['vueloVuelta']);
          $_SESSION['viaje']['avionVuelta']=$codVuelta;
          $horaVuelta=key($_POST['vueloVuelta'][$codVuelta]);
          $_SESSION['viaje']['horaVuelta']=$horaVuelta;
          try {
            if(!(new VuelosRepositorio)->
              reservaPlazas($numPasaj, $codVuelta, $_SESSION['viaje']['fVuelta'])){
              $mensajerError='No ha sido posible realizar la reserva';
            }
          } catch (\PDOException $ex) {
            $mensajerError=$ex->getMessage();
          }            
          }
        } catch (\PDOException $ex) {
          $mensajerError=$ex->getMessage();
      }
      if(!isset($mensajerError)){
        if($_SESSION['usuario']==='anonimo'){
          header('location: index.php?ctl=iniSes');
        } else {
          // TODO: enviarlo a informar de los pasajeros y ocupación de asientos
        }
      }
    }
  }
  public function agregaPasajeros()
  {
    if(isset($_POST['okPasj'])){
      try {
        $pasj=$_POST['pasj'];
        $objPasajero=new Pasajero($pasj);
        $objPasjPrincipal=unserialize($_SESSION['pasajero']);
        $objPasajero->setIdUsuario($objPasjPrincipal->getIdUsuario());
        if((new PasajeroRepositorio)->addPasajero($objPasajero)){
          $_SESSION['quedan']--;
          if($_SESSION['quedan']===0){
            $_SESSION['quedan']=$_SESSION['viaje']['adultos']+$_SESSION['viaje']['peques'];
            header('Location: index.php?ctl=ocupaAsientos');
          }
          unset($pasj);
        }
      } catch (AppException $ex){
        $erroresPasj=$ex->getError();
      } catch (\PDOException $ex) {
        $errorPDO=$ex->getMessage();
      }
    }
    include __DIR__.'../../../app/plantillas/addPasajero.inc';
  }

}