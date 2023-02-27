<?php 
namespace app\iberia\repositorio;

use ConexionBd;
use DateTime;
use PDO;

class RegistrarPasajeroRepositorio{
    //Consultar manual
    public function registrarPasajero(string $nombre,string $apellido,DateTime $fNacimiento,string $dni,string $registrarUser):bool{
      $sql1 = 'INSERT INTO pasajero(nombre,apellido,fNacimiento,dni,idUsers) VALUES (:nombre,:apellido,:fNacimiento,:dni,:registrarUser)';
try {
    $con=(new \ConexionBd()) -> getConexion();
    $con -> beginTransaction();
    $snt=$con->prepare($sql1);
    $snt->bindValue(':nombre',$nombre);
    $snt->bindValue(':apellido',$apellido);
    $snt->bindValue(':fNacimiento',$fNacimiento);
    $snt->bindValue(':dni',$dni);
    $snt->bindValue(':registrarUser',$registrarUser);
    if($snt->execute()){
        $con ->commit();
                  return true;
    }
    $con -> rollBack();
    return false;
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