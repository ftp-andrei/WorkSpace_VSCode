<?php 
namespace app\iberia\repositorio;

use ConexionBd;
use PDO;

class RegistrarUsuarioRepositorio{
    //Consultar manual
    public function registrarUsuario(string $email,string $pass):string{
      $sql1 = 'INSERT INTO usuario(eCorreo,pwd) VALUES (:email,:pass)';
try {
    $con=(new \ConexionBd()) -> getConexion();
    $con -> beginTransaction();
    $snt=$con->prepare($sql1);
    $snt->bindValue(':eCorreo',$email);
    $snt->bindValue(':pwd',$pass);
    if($snt->execute()){
        $con ->commit();
        $lastId= $con->lastInsertId();
        return $lastId;

    }
    $con -> rollBack();
    } catch (\PDOException $ex) {
    $con -> rollBack();
    $error = $ex->getMessage();
    }finally{
    unset($snt);
    unset($con);
    }
}
}
?>