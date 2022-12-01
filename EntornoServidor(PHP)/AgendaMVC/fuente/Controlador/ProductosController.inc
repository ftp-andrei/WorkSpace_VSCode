<?php 
namespace app\educacion\agenda\fuente\controlador;

use app\educacion\agenda\fuente\repositorio\ProductoRepositorio;

class ProductosController{
    public function listarTodosProductos(){
        require_once __DIR__."/../Repositorio/ProductoRepositorio.inc";
        $productos = (new ProductoRepositorio()) -> listarProductos();
        include __DIR__."/../../app/plantillas/listaProductos.inc";
    }
}