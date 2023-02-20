<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\iberia\controlador;
use app\iberia\repositorio\ArraysRepositorio;

class DefaultController
{ 
  public function ejercicio1()
  {
  $tablaPesetas = (new ArraysRepositorio()) -> tablaPesetas();
  require __DIR__ . '/../../app/plantillas/arrays1.php';
}

public function ejercicio2()
{ 
  if(isset($_POST['btnCambio'])){
    if(empty($_POST['euros']) || !is_numeric($_POST['euros'])){
      $_POST['euros']=0;
    }
    $euros= (new ArraysRepositorio()) -> cambioDivisa($_POST['euros']);
}
  $tablaEuros = (new ArraysRepositorio()) -> tablaEuros();
  require __DIR__ . '/../../app/plantillas/arrays2.php';
}

public function ejercicio3()
{ 
  $diccionario = (new ArraysRepositorio()) -> getDiccionario();
  require __DIR__ . '/../../app/plantillas/arrays3.php';

}

public function ejercicio4()
{ 
  $diccionario = (new ArraysRepositorio()) -> getDiccionario2();
  require __DIR__ . '/../../app/plantillas/arrays4.php';

}

public function ejercicio5()
{ 
  $notas = (new ArraysRepositorio()) -> getNotas();
  $notaEscrita = (new ArraysRepositorio()) -> getNotaEscrita();
  require __DIR__ . '/../../app/plantillas/arrays5.php';

}

public function ejercicio6()
{ 
  $notas = (new ArraysRepositorio()) -> getNotas();
  $notaEscrita = (new ArraysRepositorio()) -> getNotaEscrita2();
  $cantidad = (new ArraysRepositorio()) -> getCantidad($notas);
  $media = (new ArraysRepositorio()) -> getMedia($cantidad);
  require __DIR__ . '/../../app/plantillas/arrays6.php';

}
}
