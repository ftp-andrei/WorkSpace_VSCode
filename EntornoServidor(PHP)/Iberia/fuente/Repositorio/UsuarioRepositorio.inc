<?php 
namespace app\iberia\repositorio;

use ConexionBd;
use PDO;

class UsuarioRepositorio{
    public function registrarUsuario(string $email,string $pass){
      $sql1 = 'SELECT ';
try {
$registro=[];
                  return $registro;
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