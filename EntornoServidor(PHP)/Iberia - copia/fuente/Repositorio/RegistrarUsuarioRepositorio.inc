<?php 
namespace app\iberia\repositorio;

use ConexionBd;
use PDO;

class RegistrarUsuarioRepositorio{
    //Consultar manual
    public function registrarUsuario(string $email,string $pass):bool{
      $sql1 = 'INSERT INTO usuario (eCorreo,pwd,rol) VALUES (?,?,user)';
try {
    $con=(new \ConexionBd()) -> getConexion();
    $snt=$con->prepare($sql1);
    if($snt->execute([$email,$pass])){
                  return true;
    }
                } catch (\PDOException $ex) {
                    $error = $ex->getMessage();
                }finally{
                    unset($snt);
                    unset($con);
                }
      }

      
}
?>