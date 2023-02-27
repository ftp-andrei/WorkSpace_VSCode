<?php
namespace app\iberia\controlador;
use app\iberia\modelo\Pasajero;
use app\iberia\modelo\Usuario;
use app\iberia\modelo\AppException;
use app\iberia\repositorio\UsuPasajeroRepositorio;
class SesionController
{
  public function login()
  {
    include __DIR__.'../../../app/plantillas/inicioSesion.inc';
  }
  public function logout()
  {
    var_dump($_SESSION);
    if(isset($_SESSION['viaje']))
      unset($_SESSION['viaje']);
    if(isset($_SESSION['pasajero']))
      unset($_SESSION['pasajero']);
    if(isset($_SESSION['usuario']))
      unset($_SESSION['usuario']);
    if(isset($_SESSION['eCorreo']))
      unset($_SESSION['eCorreo']);
    if(isset($_SESSION['quedan']))
      unset($_SESSION['quedan']);
    session_destroy();
    header('Location: index.php');
  }
  public function agregaCliente()
  {
    if(isset($_POST['okReg'])){
      try {
        $pasj=$_POST['pasj'];
        $objPasajero=new Pasajero($pasj);
      } catch (AppException $ex) {
        $mensError=$ex->getMessage();
        $erroresPasj=$ex->getError();
      }
      $usu=$_POST['usu'];
      if($usu['pass1']!==$usu['pass2']){
        $errorContrDif='Contraseñas diferentes';
      } else {
        try {
          $objUsuario=new Usuario(['eCorreo'=>$usu['eCorreo'], 'pass'=>$usu['pass1']]);
          if(!isset($mensError)){
            $idsArray=(new UsuPasajeroRepositorio())->addUsuPasajero($objUsuario, $objPasajero);
            var_dump($_SESSION);
            if(is_array($idsArray)){
              $objPasajero->setIdPasajero($idsArray['idPasj']);
              $objPasajero->setIdUsuario($idsArray['idUsu']);
              $_SESSION['usuario']='cliente';
              $_SESSION['eCorreo']=$objUsuario->getECorreo();
              $_SESSION['pasajero']=serialize($objPasajero);
              if($_SESSION['viaje']['adultos']>1 || $_SESSION['viaje']['peques']>0){
                $_SESSION['quedan']=$_SESSION['viaje']['adultos']+$_SESSION['viaje']['peques']-1;
                header('Location: index.php?ctl=agregaPasajeros');
              } else {
                header('Location: index.php?ctl=ocupaAsientos');
              }
            }
          }
        } catch (AppException $ex) {
          $erroresUsu=$ex->getError();
        } catch (\PDOException $ex){
          die(var_dump($errorPDO = $ex->getMessage()));
        } catch (\Exception $ex){
          $errorExc=$ex->getMessage();
        }
      }
    }
    include __DIR__.'../../../app/plantillas/nuevoCliente.inc';
  }
}