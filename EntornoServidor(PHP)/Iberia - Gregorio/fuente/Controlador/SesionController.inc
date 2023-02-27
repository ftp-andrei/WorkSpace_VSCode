<?php
namespace app\iberia\controlador;
use app\iberia\modelo\Pasajero;
use app\iberia\modelo\Usuario;
use app\iberia\modelo\AppException;
use app\iberia\repositorio\UsuarioPasajeroRepositorio;
class SesionController
{
  public function login()
  {
    include __DIR__.'../../../app/plantillas/inicioSesion.inc';
  }
  public function logout()
  {
    
  }

  public function agregaCliente()
  {
    if(isset($_POST['okReg'])){
try {
  $pasaj=$_POST['pasaj'];
  $pasajero= (new Pasajero($pasaj));
} catch (AppException $ex) {
  $msjError = $ex ->getMessage();
  $erroresPas = $ex -> getError();
}

$usu=$_POST['usu'];
if ($usu['usuariopassword']!==$usu['usuariopassword2']) {
  $errorContrasena = "Contraseñas diferentes";
}else{
  try {
$objUsuario = (new Usuario(['eCorreo' =>$usu['eCorreo'],'pass' =>$usu['usuariopassword']]));
$idPasaj = (new UsuarioPasajeroRepositorio($objUsuario,$pasajero));
if($idPasaj){
  $pasajero -> setIdPasajero($idPasaj);
  $_SESSION['usuario']='cliente';
}
} catch (AppException $ex) {
$erroresUsu = $ex -> getError();
} catch (\PDOException $ex){
  $errorPDO = $ex -> getMessage();
} catch (\Exception $ex){
  $errorEx= $ex -> getMessage();
}


}
    }
    include __DIR__.'../../../app/plantillas/nuevoCliente.inc';
  }
}