<?php

namespace app\iberia\repositorio;

use app\iberia\modelo\Pasajero;
use app\iberia\modelo\Usuario;
use ConexionBd;

class UsuarioPasajeroRepositorio
{
    public function addUsuPasajero(Usuario $usu,Pasajero $pasaj): array|false{
        $sql1= 'INSERT INTO usuario (eCorreo,pwd,rol) VALUES
        (:eCorreo,:pwd,:rol)';
        $sql2='INSERT INTO pasajero (nombre,apellido,dni,fNacimiento, idUsers) VALUES (:nombre,:apellido,:dni,:fNacimiento,:idUsers)';
        include __DIR__.'../../../core/conexionBd.inc';
        try {
            $con=(new ConexionBd())-> getConexion();
            $con -> beginTransaction();
            $snt=$con->prepare($sql1);
            $snt->bindValue(':eCorreo',$usu ->getECorreo());
            $snt->bindValue(':pwd',$usu ->getPwd());
            $snt->bindValue(':rol',$usu ->getRol());
            if($snt->execute()){
                $idUsers= $con -> lastInsertId();
                $snt=$con->prepare($sql2);
            $snt->bindValue(':nombre',$pasaj ->getNombre());
            $snt->bindValue(':apellido',$pasaj ->getApellido());
            $snt->bindValue(':dni',$pasaj ->getDni());
            $snt->bindValue(':fNacimiento',$pasaj ->getFNacimiento());
            $snt->bindValue(':idUsers',$idUsers);
                if($snt->execute()){
                 $con ->commit();
                 return ['idUsu' -> $idUsers,'idPasaj', $con -> lastInsertId()];
              }
            }
            $con -> rollBack();
        } catch (\PDOException $ex) {
            $con -> rollBack();
            throw $ex;
        }finally{
            unset($snt);
            unset($con);
        }
    }
}

?>