<?php
namespace app\iberia\repositorio;
use app\iberia\modelo\Pasajero;
class PasajeroRepositorio
{
  public function addPasajero(Pasajero $objPasj):bool
  {
    $sql="IF EXISTS
            (SELECT * 
               FROM pasajero
              WHERE dni = :dniPasj)
          BEGIN
            UPDATE pasajero
               SET idUsers = :idUsu
             WHERE dni = :dniIgual;
          END
          ELSE
          BEGIN
            INSERT INTO pasajero (nombre, apellido, dni, fNacimiento, idUsers)
                      VALUES (:nombre, :apellido, :dni, :fNacimiento, :idUsers)
          END";
    include __DIR__.'../../../core/conexionBd.inc';
    try {
      $con=(new \ConexionBd())->getConexion();
      $snt=$con->prepare($sql);
      $snt->bindValue(':dniPasj',$objPasj->getDni());
      $snt->bindValue(':dniIgual',$objPasj->getDni());
      $snt->bindValue(':idUsu',$objPasj->getIdUsuario());
      $snt->bindValue(':nombre', $objPasj->getNombre());
      $snt->bindValue(':apellido', $objPasj->getApellido());
      $snt->bindValue(':dni',$objPasj->getDni());
      $snt->bindValue(':fNacimiento',$objPasj->getFNacimiento()->format('Y-m-d'));
      $snt->bindValue(':idUsers',$objPasj->getIdUsuario());
      return $snt->execute();
    } catch (\PDOException $ex) {
      throw $ex;
    } finally {
      unset($snt);
      unset($con);
    }
  }
  public function findPasajerosUsuario(int $idUsuario):array
  {
    $sql='SELECT idPasajero, nombre +\' \'+apellido as Pasajero
            FROM pasajero
           WHERE idUsers=:idUsuario';
    include __DIR__.'../../../core/conexionBd.inc';
    try {
      $con=(new \ConexionBd())->getConexion();
      $snt=$con->prepare($sql);
      $snt->bindValue(':idUsuario',$idUsuario);
      $snt->execute();
      $filas=$snt->fetchAll(\pdo::FETCH_ASSOC);
      if(!empty($filas)){
        return $filas;
      } else {
        return [];
      }
    } catch (\PDOException $ex) {
      throw $ex;
    } finally { 
      unset($snt);
      unset($con);
    }

  }
}