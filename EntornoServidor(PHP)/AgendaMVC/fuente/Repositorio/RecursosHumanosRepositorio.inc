<?php

namespace app\educacion\agenda\fuente\repositorio;

use app\educacion\agenda\fuente\modelo\Departamento;

use ConexionBd;

class RecursosHumanosRepositorio
{
    /**
     * Undocumented function
     *
     * @return array
     */
    public function getAllDivisiones(): array
    {
        $sql = 'SELECT DISTINCT GroupName as División
        FROM HumanResources.Department
        ORDER BY División';

        require_once __DIR__ . '/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd())->getConexion();
            $snt = $con->prepare($sql);
            $snt->execute();
            $divisiones = [];
            while ($fila = $snt->fetch(\PDO::FETCH_ASSOC))
                $divisiones[] = $fila['División'];
            return $divisiones;
        } catch (\PDOException $ex) {
            throw $ex;
        } finally {
            $snt = null;
            $con = null;
        }
    }
    public function addNewDepartamento(Departamento $dept): bool
    {
        $sql1 = 'INSERT INTO HumanResources.Department (Name, GroupName, ModifiedDate)
        VALUES (:nombre, :division,:fModificado)';
        $sql2 = 'INSERT INTO HumanResources.Department (Name, GroupName)
        VALUES (:nombre, :division)';

        require_once __DIR__ . '/../../core/conexionBd.inc';
        try {
            $con = (new ConexionBd())->getConexion();
            if(!is_null($dept->getFModificado())){
                $snt = $con->prepare($sql1);
                $snt->bindValue(':fModificado', $dept->getFModificado()->format('Y-d-m'));
            }else{
                $snt = $con->prepare($sql2);
            }
            $snt->bindValue(':nombre', $dept->getNombre());
            $snt->bindValue(':division', $dept->getDivision());
            return $snt->execute();
        } catch (\PDOException $ex) {
            throw $ex;
        } finally {
            $snt = null;
            $con = null;
        }
    }
}
