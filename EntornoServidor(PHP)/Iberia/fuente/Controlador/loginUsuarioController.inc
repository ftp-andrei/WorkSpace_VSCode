<?php
namespace app\iberia\controlador;
use app\iberia\repositorio\loginUsuarioRepositorio;

class LoginUsuarioController
{ 
    public function loginRegistrarUsuario(){
        if(isset($_POST['entrar'])){
          //Comprobar que el correo no esta registrado
          //Comprobar que ambas pass son iguales 
          // Finalmente registrar
          $login = (new loginUsuarioRepositorio()) -> loginUsuario($_POST['user'],$_POST['pass']);
        }
        require __DIR__ . '/../../app/plantillas/inicioSesion.php';
    }
}