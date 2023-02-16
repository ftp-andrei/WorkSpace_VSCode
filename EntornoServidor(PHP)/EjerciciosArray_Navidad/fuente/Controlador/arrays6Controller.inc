<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Arrays6Repositorio;

class Arrays6Controller
{ 
  public function ejercicio6()
  { 
    $notas = (new Arrays6Repositorio()) -> getNotas();
    $notaEscrita = (new Arrays6Repositorio()) -> getNotaEscrita();
    $cantidad = (new Arrays6Repositorio()) -> getCantidad($notas);
    $media = (new Arrays6Repositorio()) -> getMedia($cantidad);
    require __DIR__ . '/../../app/plantillas/arrays6.php';

}
}
