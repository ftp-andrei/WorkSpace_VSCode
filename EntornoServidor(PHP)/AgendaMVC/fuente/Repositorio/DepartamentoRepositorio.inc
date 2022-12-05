<?php

namespace app\educacion\agenda\fuente\repositorio;

use ConexionBd;

class DepartamentoRepositorio{
    public function crearDepartamento():array{
        $sql = "INSERTAR FUNCION SQL";
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