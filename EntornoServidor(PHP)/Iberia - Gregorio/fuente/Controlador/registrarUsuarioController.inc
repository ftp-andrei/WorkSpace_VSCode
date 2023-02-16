<?php
namespace app\iberia\controlador;
use app\iberia\repositorio\RegistrarUsuarioRepositorio;

class RegistrarUsuarioController
{ 
  //mete privates como en java
  //Luego hace un __construct que imagino será el main
  // Abajo del __construct pone las funciones
  // En el construct hace ifs con this.
  // los getter y setters van en el class Usuario (Supongo que modelo).
  // 
    public function registrarUsuario(){
        if(isset($_POST['registrarse'])){
          //Comprobar que el correo esta registrado
          if($_POST['correo']!=null && $_POST['correo']===null){
          //Comprobar que ambas pass son iguales
          if($_POST['pass1']==$_POST['pass2'] && $_POST['pass1']!==null){
            $registro = (new RegistrarUsuarioRepositorio()) -> registrarUsuario($_POST['correo'],$_POST['pass1']);
          }else{
            return "Error: Las contraseñas no coinciden";
          }
          }else{
            return "Error: El correo ya esta registrado";
          }
          
          // Finalmente registrar
          
        }
        require __DIR__ . '/../../app/plantillas/inicioSesion.php';
      }
}