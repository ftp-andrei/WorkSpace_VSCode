<?php
namespace app\iberia\controlador;
use app\iberia\repositorio\UsuarioRepositorio;

class UsuarioController
{ 
    public function registrarUsuario(){
        if(isset($_POST['registrarse'])){
          //Comprobar que el correo esta registrado
          if($_POST['correo']!=null && $_POST['correo']===null){
          //Comprobar que ambas pass son iguales
          if($_POST['pass1']==$_POST['pass2'] && $_POST['pass1']!==null){
            $registro = (new UsuarioRepositorio()) -> registrarUsuario($_POST['correo'],$_POST['pass1']);
          }else{
            return "Error: Las contraseñas no coinciden";
          }
          }else{
            return "Error: El correo ya esta registrado";
          }
          
          // Finalmente registrar
          
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