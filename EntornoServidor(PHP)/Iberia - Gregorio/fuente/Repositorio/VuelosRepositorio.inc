<?php

namespace app\iberia\repositorio;

use DateTime;

class VuelosRepositorio
{
  public function findVuelos(int $numPasj,string $origen, string $destino, string $ida, string $vuelta = null): array
  {
    $sql1 = 'SELECT v.codigo as Código, origen as Origen, destino as Destino, 
                    salida as "Hora salida", duracion as Duración, fecha as "Fecha ida"
            FROM vuelo AS v
                INNER JOIN vuelos AS vs ON v.codigo = vs.codigo
           WHERE origen = :origen
             AND destino = :destino
             AND fecha = :ida
             AND libres > :pasj';
    if (!is_null($vuelta)) {
      $sql2 = 'SELECT v.codigo as Código, origen as Origen, destino as Destino, 
                      salida as "Hora salida", duracion as Duración, fecha as "Fecha vuelta"
              FROM vuelo AS v
                  INNER JOIN vuelos AS vs ON v.codigo = vs.codigo
            WHERE origen = :destino
              AND destino = :origen
              AND fecha = :vuelta
              AND libres > :pasj';
    }
    require_once __DIR__ . '/../../core/conexionBd.inc';
    $vuelos = [];
    try {
      $con = (new \ConexionBd())->getConexion();
      $snt = $con->prepare($sql1);
      $snt->bindValue(':origen', $origen);
      $snt->bindValue(':destino', $destino);
      $snt->bindValue(':ida', $ida);
      $snt->bindValue(':pasj', $numPasj);
      $snt->execute();
      $filas = $snt->fetchAll(\PDO::FETCH_ASSOC);
      if(empty($filas)){
        return [];
      }
      $vuelos['ida'] =  $filas;
      if (!is_null($vuelta)) {
        $snt = $con->prepare($sql2);
        $snt->bindValue(':origen', $origen);
        $snt->bindValue(':destino', $destino);
        $snt->bindValue(':vuelta', $vuelta);
        $snt->bindValue(':pasj', $numPasj);
        $snt->execute();
        $filas = $snt->fetchAll(\PDO::FETCH_ASSOC);
        if(empty($filas)){
          return [];
        }
        $vuelos['vuelta'] = $filas;
  
      }
      return $vuelos;
    } catch (\PDOException $ex) {
      throw $ex;
    } finally {
      unset($snt);
      unset($con);
    }
  }
  public function reservaPlazas(int $numPasj, string $codigo, string $fecha):bool
  {
    $sql='UPDATE vuelos
             SET libres = libres - :pasajeros
           WHERE codigo = :codigo
             AND fecha = :fecha
             AND libres >= :pasaj';
    require_once __DIR__ . '/../../core/conexionBd.inc';
    try {
      $con = (new \ConexionBd())->getConexion();
      $snt = $con->prepare($sql);
      $snt->bindValue(':pasajeros', $numPasj);
      $snt->bindValue(':codigo', $codigo);
      $snt->bindValue(':fecha', $fecha);
      $snt->bindValue(':pasaj', $numPasj);
      return $snt->execute();
    } catch (\PDOException $ex) {
      throw $ex;
    } finally {
      unset($snt);
      unset($con);
    }
  }
  public function ocupacionVuelo(string $codigo, string $fecha):array
  {
    $sql="SELECT codigo, fecha, fila1, fila2, fila3, fila4, fila5,
                 fila6, fila7, fila8, fila9, fila10,
                 fila11, fila12, fila13, fila14, fila15,
                 fila16, fila17, fila18, fila19, fila20
            FROM vuelos
           WHERE codigo = :codigo
             AND fecha = :fecha";
    require_once __DIR__ . '/../../core/conexionBd.inc';
    try {
      $con = (new \ConexionBd())->getConexion();
      $snt = $con->prepare($sql);
      $snt->bindValue(':codigo', $codigo);
      $snt->bindValue(':fecha', $fecha);
      $snt->execute();
      $asientos = $snt->fetch(\PDO::FETCH_ASSOC);
      return ['codigo'=>$asientos['codigo'],'fecha' => $asientos['fecha'],
              'filas'=>[1=>(int)$asientos['fila1'], (int)$asientos['fila2'],(int)$asientos['fila3'],(int)$asientos['fila4'],(int)$asientos['fila5'],
                           (int)$asientos['fila6'], (int)$asientos['fila7'],(int)$asientos['fila8'],(int)$asientos['fila9'],(int)$asientos['fila10'],
                           (int)$asientos['fila11'], (int)$asientos['fila12'],(int)$asientos['fila13'],(int)$asientos['fila14'],(int)$asientos['fila15'],
                           (int)$asientos['fila16'], (int)$asientos['fila17'],(int)$asientos['fila18'],(int)$asientos['fila19'],(int)$asientos['fila20'],
                       ],
            ];
    } catch (\PDOException $ex) {
      throw $ex;
    } finally {
      unset($snt);
      unset($con);
    }
  }
  public function ocupaAsientos(array $vuelos, array $viaje):bool
  {
    $sql=[1=>'UPDATE vuelos
              SET fila1 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila1 = :ocupAnterior',
          'UPDATE vuelos
              SET fila2 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila2 = :ocupAnterior',
          'UPDATE vuelos
              SET fila3 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila3 = :ocupAnterior',
          'UPDATE vuelos
              SET fila4 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila4 = :ocupAnterior',
          'UPDATE vuelos
              SET fila5 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila5 = :ocupAnterior',
          'UPDATE vuelos
              SET fila6 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila6 = :ocupAnterior',
          'UPDATE vuelos
              SET fila7 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila7 = :ocupAnterior',
          'UPDATE vuelos
              SET fila8 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila8 = :ocupAnterior',
          'UPDATE vuelos
              SET fila9 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila9 = :ocupAnterior',
          'UPDATE vuelos
              SET fila10 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila10 = :ocupAnterior',
          'UPDATE vuelos
              SET fila11 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila11 = :ocupAnterior',
          'UPDATE vuelos
              SET fila12 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila12 = :ocupAnterior',
          'UPDATE vuelos
              SET fila13 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila13 = :ocupAnterior',
          'UPDATE vuelos
              SET fila14 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila14 = :ocupAnterior',
          'UPDATE vuelos
              SET fila15 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila15 = :ocupAnterior',
          'UPDATE vuelos
              SET fila16 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila16 = :ocupAnterior',
          'UPDATE vuelos
              SET fila17 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila17 = :ocupAnterior',
          'UPDATE vuelos
              SET fila18 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila18 = :ocupAnterior',
          'UPDATE vuelos
              SET fila19 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila19 = :ocupAnterior',
          'UPDATE vuelos
              SET fila20 = :ocupacion
            WHERE codigo = :codigo
              AND fecha = :fecha
              AND fila20 = :ocupAnterior'];
  $sql2='INSERT INTO viaje (idPasajero, codigo, fecha, fila, asiento)
                VALUES (:idPasajero, :codigo, :fecha, :fila, :asiento)';
    require_once __DIR__.'../../../core/conexionBd.inc';
    $fila='';
    $ocupacion=0;
    try {
      $con=(new \ConexionBd())->getConexion();
      $con->beginTransaction();
      foreach($vuelos['filas'] as $row => $ocupacion){
        $snt=$con->prepare($sql[$row]);
        $snt->bindValue(':codigo', $vuelos['codigo']);
        $snt->bindValue(':fecha', $vuelos['fecha']);
        $snt->bindValue(':ocupacion',$ocupacion['actual']);
        $snt->bindValue(':ocupAnterior', $ocupacion['anterior']);
        if(!$snt->execute()||$snt->rowCount()!=1){
          $con->rollback();
          return false;
        }
      }
      $snt=$con->prepare($sql2);
      $idpas=0;
      $cod='';
      $fech='';
      $fil='';
      $asi='';
      $snt->bindParam(':idPasajero',$idpas);
      $snt->bindParam(':codigo',$cod);
      $snt->bindParam(':fecha',$fech);
      $snt->bindParam(':fila',$fil);
      $snt->bindParam(':asiento',$asi);
      foreach($viaje as $value){
        $idpas=$value['idPasajero'];
        $cod=$value['codigo'];
        $fech=$value['fecha'];
        $fil=$value['fila'];
        $asi=$value['asiento'];
        if(!$snt->execute()||$snt->rowCount()!=1){
          $con->rollback();
          return false;
        }
      }
      $con->commit();
      return true;
    } catch (\PDOException $ex) {
      $con->rollBack();    
      throw $ex;
    } finally {
      unset($snt);
      unset($con);
    }
  }
}
