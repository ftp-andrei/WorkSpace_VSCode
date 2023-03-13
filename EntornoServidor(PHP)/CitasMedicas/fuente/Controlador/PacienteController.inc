<?php
namespace app\CitasMedicas\controlador;

use app\CitasMedicas\repositorio\MedicoRepositorio;

// Ejemplo de controlador para página home de la aplicación
class PacienteController
{ 
  public function solicitarcita(){
    $especialidad = (new MedicoRepositorio()) -> getAllEspecialidades();
  require __DIR__ . '/../../app/plantillas/solicitarCita.inc';
  }
}