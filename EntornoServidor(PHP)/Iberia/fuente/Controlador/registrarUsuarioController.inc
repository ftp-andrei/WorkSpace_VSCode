<?php
namespace app\iberia\controlador;

use app\iberia\repositorio\RegistrarPasajeroRepositorio;
use app\iberia\repositorio\RegistrarUsuarioRepositorio;

class RegistrarUsuarioController
{ 
    public function registrarUsuario(){
        if(isset($_POST['registro'])){
            $registrarUser = (new RegistrarUsuarioRepositorio()) -> registrarUsuario($_POST['Correo'],$_POST['pass']);
            // $registrarPasajero = (new RegistrarPasajeroRepositorio()) -> registrarPasajero($_POST['Nombre'],$_POST['Apellido'],$_POST['fnac'],$_POST['DNI'],$registrarUser);
        }
        require __DIR__ . '/../../app/plantillas/inicioSesion.php';
      }
}