<?php

namespace app\educacion\agenda\fuente\controlador;

use app\educacion\agenda\fuente\modelo\Departamento;
use app\educacion\agenda\fuente\modelo\exception\AppException;
use \app\educacion\agenda\fuente\repositorio\RecursosHumanosRepositorio;

class RecursosHumanosController
{
    public function agregarDepartamento()
    {
        require_once __DIR__ . '/../Repositorio/RecursosHumanosRepositorio.inc';
        try {
            $obRecHum = new RecursosHumanosRepositorio();
            $divisiones = $obRecHum->getAllDivisiones();
            if (isset($_POST['ok'])) {
                require_once __DIR__ . '/../Modelo/Departamento.inc';
                try {
                    $objDepartamento = new Departamento($_POST['dep']);
                    try {
                        if ($obRecHum->addNewDepartamento($objDepartamento)) {
                            header('location: index.php');
                        } else {
                            /*Por aqui no deberia entrar nunca*/ 
                            $error = 'No se ha podido agregar el departamento.';
                        }
                    } catch (\PDOException $ex) {
                        $errorAdd = $ex->getMessage();
                    }
                } catch (AppException $ex) {
                    $errores = $ex->getErrores();
                }
            }
        } catch (\PDOException $ex) {
            $errorGetDivision = $ex->getMessage();
        }
        include __DIR__ . '/../../app/plantillas/agregaDept.inc';
    }
}
