<?php
namespace app\iberia\repositorio;

use app\iberia\modelo\Usuario;
use app\iberia\modelo\Pasajero;

class UsuPasajeroRepositorio
{
  public function addUsuPasajero(Usuario $usu, Pasajero $pasj):array|false
  {
    $sql1="INSERT INTO users (eCorreo, pwd, rol)
                VALUES (:eCorreo, :pwd, :rol)";
    $sql2="INSERT INTO pasajero (nombre, apellido, dni, fNacimiento, idUsers)
                VALUES (:nombre, :apellido, :dni, :fNacimiento, :idUsers)";
    include __DIR__.'../../../core/conexionBd.inc';
    try {
      $con=(new \ConexionBd())->getConexion();
      $con->beginTransaction();
      $snt=$con->prepare($sql1);
      $snt->bindValue(':eCorreo', $usu->getECorreo());
      $snt->bindValue(':pwd', $usu->getPwd());
      $snt->bindValue(':rol',$usu->getRol());
      if($snt->execute()){
        $idUsers=$con->lastInsertId();
        $snt=$con->prepare($sql2);
        $snt->bindValue(':nombre', $pasj->getNombre());
        $snt->bindValue(':apellido', $pasj->getApellido());
        $snt->bindValue(':dni',$pasj->getDni());
        $snt->bindValue(':fNacimiento',$pasj->getFNacimiento()->format('Y-m-d'));
        $snt->bindValue(':idUsers',$idUsers);
        if($snt->execute()){
          $con->commit();
          return ['idUsu'=>$idUsers, 'idPasj'=>$con->lastInsertId()];
        }
      }
      $con->rollBack();
      return false;
    } catch (\PDOException $ex) {
      $con->rollBack();    
      throw $ex;
    } finally {
      unset($snt);
      unset($con);
    }
  }
}