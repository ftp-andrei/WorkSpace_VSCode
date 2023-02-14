<?php 
namespace app\iberia\repositorio;
use ConexionBd;
use PDO;

class LoginUsuarioRepositorio{
public function loginUsuario(string $user,string $pass){
        $sql1 = 'SELECT ';
    try {
        
                  } catch (\PDOException $ex) {
                      $error = $ex->getMessage();
                  }finally{
                      unset($snt);
                      unset($con);
                  }
        }

    }