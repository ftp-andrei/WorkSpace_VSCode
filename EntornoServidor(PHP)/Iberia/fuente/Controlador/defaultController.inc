<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
/** Gregorio añade aqui el repo de Pasajero,Usuario y AppException */
use app\iberia\repositorio\VuelosRepositorio;
use app\iberia\repositorio\PasajeroRepositorio;
use app\iberia\repositorio\UsuarioRepositorio;


// Ejemplo de controlador para página home de la aplicación
class DefaultController
{ 
  public function inicio()
  { 
    if(isset($_POST['ok'])){
    //Se añade la ruta ya en el index
   // require_once __DIR__.'/../Repositorio/VuelosRepositorio.inc';
    $vuelos = (new VuelosRepositorio()) -> findVuelos($_POST['salida'],$_POST['destino'],$_POST['ida'],$_POST['vuelta']);
  }
  require __DIR__ . '/../../app/plantillas/inicio.php';
}

public function reservar()
{
  if(isset($_POST['ok'])){
  //Se añade la ruta ya en el index
 // require_once __DIR__.'/../Repositorio/VuelosRepositorio.inc';
  $vuelos = (new PasajeroRepositorio()) -> reservar($_POST['salida'],$_POST['destino'],$_POST['ida'],$_POST['vuelta']);
}
require __DIR__ . '/../../app/plantillas/reservar.php';
}

public function registrarUsuario(){
  if(isset($_POST['registrarse'])){
    //Comprobar que el correo esta registrado
    if($_POST['correo']!=null && $_POST['correo']===null){
    //Comprobar que ambas pass son iguales
    if($_POST['pass1']==$_POST['pass2'] && $_POST['pass1']!==null){

    }else{
      return "Error: Las contraseñas no coinciden";
    }
    }else{
      return "Error: El correo ya esta registrado";
    }
    
    // Finalmente registrar
    $registro = (new UsuarioRepositorio()) -> registrarUsuario($_POST['correo'],$_POST['pass1']);
  }

  if(isset($_POST['entrar'])){
    //Comprobar que el correo no esta registrado
    //Comprobar que ambas pass son iguales 
    // Finalmente registrar
    $login = (new UsuarioRepositorio()) -> loginUsuario($_POST['user'],$_POST['pass']);
  }
  require __DIR__ . '/../../app/plantillas/inicioSesion.php';
}
}
