<?php 
namespace app\educacion\agenda\fuente\controlador;

use app\educacion\agenda\fuente\repositorio\ProductoRepositorio;

class ProductosController{
    public function listarTodosProductos(){
        require_once __DIR__."/../Repositorio/ProductoRepositorio.inc";
        try {
            $productos = (new ProductoRepositorio()) -> listarProductos();
            include __DIR__."/../../app/plantillas/listaProductos.inc";
        } catch (\PDOException $ex) {
            $error = $ex ->getMessage();
            $codigo -> $ex ->getCode();
        }
        include __DIR__."/../../app/plantillas/listaProductos.inc";
    }
}