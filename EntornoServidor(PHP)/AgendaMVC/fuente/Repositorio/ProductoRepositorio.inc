<?php

namespace app\educacion\agenda\fuente\repositorio;

use ConexionBd;

class ProductoRepositorio{
    public function listarProductos():array{
        $sql = "SELECT TOP (100) [ProductID] ID
        ,[Name] Nombre
        ,[Color] Color
        ,[ListPrice] Precio
        ,[Weight] Peso
         FROM [AdventureWorks2019].[Production].[Product] WHERE name IS NOT NULL   and color IS NOT NULL and listPrice IS NOT NULL and weight IS NOT NULL";
        require_once __DIR__."/../../core/conexionBd.inc";
        try {
            $con = (new \ConexionBd()) -> getConexion();
            $stn = $con -> prepare($sql);
            $stn -> execute();
            return $stn -> fetchAll(\PDO::FETCH_ASSOC);
        } catch (\PDOException $ex) {
            throw $ex;
        }finally{
            $stn = null;
            $con = null;
        }
    }
}