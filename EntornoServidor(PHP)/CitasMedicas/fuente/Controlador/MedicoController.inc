<?php
// Ejemplo de controlador para página home de la aplicación
class MedicoController
{ 
  public function consultarPaciente(){
  require __DIR__ . '/../../app/plantillas/consultaPacientes.inc';
  }
}