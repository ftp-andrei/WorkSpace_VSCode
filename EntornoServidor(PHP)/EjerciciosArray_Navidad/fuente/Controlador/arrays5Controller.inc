<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\Arrays5Repositorio;

class Arrays5Controller
{ 
  public function ejercicio5()
  { 
    $notas = (new Arrays5Repositorio()) -> getNotas();
    $notaEscrita = (new Arrays5Repositorio()) -> getNotaEscrita();
    require __DIR__ . '/../../app/plantillas/arrays5.php';

}
}
