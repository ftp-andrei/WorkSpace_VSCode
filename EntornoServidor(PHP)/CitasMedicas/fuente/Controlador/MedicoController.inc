<?php
namespace app\CitasMedicas\controlador;

// Ejemplo de controlador para página home de la aplicación
class MedicoController
{ 
  public function inicio(){
  require __DIR__ . '/../../app/plantillas/consultaPacientes.inc';
  }
}