<?php 
namespace app\iberia\repositorio;

use ConexionBd;
use PDO;

class UsuarioRepositorio{
    //Consultar manual
    public function registrarUsuario(string $email,string $pass):mixed{
      $sql1 = 'INSERT INTO usuario (eCorreo,pwd,rol) VALUES (:email,:pass)';
try {
    $con=(new \ConexionBd()) -> getConexion();
    $snt=$con->prepare($sql1);
    $snt-> bindValue(':email',$email);
    $snt-> bindValue(':pass',$pass);
    if($snt->execute()){
                  return "Se ha registrado el usuario";
    }
                } catch (\PDOException $ex) {
                    $error = $ex->getMessage();
                }finally{
                    unset($snt);
                    unset($con);
                }
      }

      public function loginUsuario(string $user,string $pass){
        $sql1 = 'SELECT ';
  try {
  $user=[];
                    return $user;
                  } catch (\PDOException $ex) {
                      $error = $ex->getMessage();
                  }finally{
                      unset($snt);
                      unset($con);
                  }
        }

      
}
?>