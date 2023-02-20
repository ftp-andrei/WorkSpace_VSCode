<?php
/** Al usar namespace permite ahorrar la ruta completa al DefaultController */
namespace app\ejercicios\controlador;
use app\ejercicios\repositorio\ClienteRepositorio;

class ClienteController
{ 
  public function ejercicio3()
  { 
    // $correo = (new ClienteRepositorio()) -> sanitizarMail($_POST['Correo']);
    // $nombre = (new ClienteRepositorio()) -> sanitizarText($_POST['Nombre']);
    // $apellido = (new ClienteRepositorio()) -> sanitizarText($_POST['Apellido']);
    // $telefono = (new ClienteRepositorio()) -> sanitizarNumber($_POST['Telefono']);

    require __DIR__ . '/../../app/plantillas/navidad3.php';

}
}
