<?php
namespace app\iberia\controlador;
use app\iberia\modelo\Pasajero;
use app\iberia\modelo\Usuario;
use app\iberia\modelo\AppException;
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

$user=$_POST['usuariocorreo'];
if ($user['usuariopassword']!==$user['usuariopassword2']) {
  $errorContrasena = "Contraseñas diferentes";
}else{
  try {
$objUsuario = (new Usuario($user));
} catch (AppException $ex) {
$msjError = $ex ->getMessage();
$erroresUsu = $ex -> getError();
}
}
    }
    include __DIR__.'../../../app/plantillas/nuevoCliente.inc';
  }
}