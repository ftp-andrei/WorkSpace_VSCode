<?php 
namespace app\iberia\repositorio;

use ConexionBd;
use PDO;

class PasajeroRepositorio{
    public function reservar(string $origen, string $destino, string $ida, string $vuelta=null):array
    {
        /* Consulta sql*/ 
        $sql1 = 'SELECT v.codigo as Código,origen as Origen,destino as Destino, vs.*
        FROM vuelo as v INNER JOIN vuelos AS vs ON v.codigo=vs.codigo 
        WHERE origen=:origen AND destino=:destino AND fecha=:ida AND libres>0';
    
        if(!is_null($vuelta)){
            $sql2 = 'SELECT v.codigo as Código,origen as Origen,destino as Destino, vs.*
            FROM vuelo as v INNER JOIN vuelos AS vs ON v.codigo=vs.codigo 
            WHERE origen=:destino AND destino=:origen AND fecha=:vuelta AND libres>0';
        }

        //Se añade la ruta ya en el index
        //require_once __DIR__.'/../../core/conexionBd.inc'; 
    $vuelos=[];
        try {
            $con=(new \ConexionBd()) -> getConexion();
            $snt=$con->prepare($sql1);
            $snt->bindValue(':origen',$origen);
            $snt->bindValue(':destino',$destino);
            $snt->bindValue(':ida',$ida);
            $snt->execute();
            $vuelos['ida']=$snt->fetchAll(\PDO::FETCH_ASSOC);
            if(!is_null($vuelta)){
            $snt=$con->prepare($sql2);
            $snt->bindValue(':origen',$origen);
            $snt->bindValue(':destino',$destino);
            $snt->bindValue(':vuelta',$vuelta);
            $snt->execute();
            $vuelos['vuelta']=$snt->fetchAll(\PDO::FETCH_ASSOC);
            }
            return $vuelos;
        } catch (\PDOException $ex) {
            $error = $ex->getMessage();
        }finally{
            unset($snt);
            unset($con);
        }
    }
}

?>