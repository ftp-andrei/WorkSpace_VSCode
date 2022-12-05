<?php 
namespace app\educacion\agenda\fuente\controlador;

use app\educacion\agenda\fuente\repositorio\DepartamentoRepositorio;
use app\educacion\agenda\fuente\modelo\Departamento;

class RecursosHumanosController{
    public function crearNuevoDepartamento(){
        require_once __DIR__."/../Repositorio/ProductoRepositorio.inc";
        try {
            $dpto = (new DepartamentoRepositorio()) -> crearDepartamento();
            include __DIR__."/../../app/plantillas/agregarDept.inc";
        } catch (\PDOException $ex) {
            $error = $ex ->getMessage();
            $codigo -> $ex ->getCode();
        }
        include __DIR__."/../../app/plantillas/agregarDept.inc";
    }
}