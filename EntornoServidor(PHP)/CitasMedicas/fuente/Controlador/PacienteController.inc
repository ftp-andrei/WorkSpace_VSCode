<?php
namespace app\CitasMedicas\controlador;

// Ejemplo de controlador para página home de la aplicación
class PacienteController
{ 
  public function solicitarcita(){
  require __DIR__ . '/../../app/plantillas/solicitarCita.inc';
  }
}