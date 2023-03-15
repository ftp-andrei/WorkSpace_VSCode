<?php
namespace app\CitasMedicas\controlador;

use app\CitasMedicas\repositorio\MedicoRepositorio;

// Ejemplo de controlador para página home de la aplicación
class PacienteController
{ 
  public function solicitarcita(){
    $especialidad = (new MedicoRepositorio()) -> getAllEspecialidades();
    if(isset($_POST['solicitar'])){
      //Contruimos el array
      $array=[
        'ss' => $_POST['ss'],
        'especialidad' => $_POST['especialidad'],
        'observaciones' => $_POST['observaciones'],
        'fcita' => $_POST['dia'],
        'hcita' => $_POST['hora']
      ];
        // lo mandamos a citas, y devuelve un array
      $citas = (new MedicoRepositorio()) -> saveCita($array);
      // var_dump($citas);
    }
  require __DIR__ . '/../../app/plantillas/solicitarCita.inc';
  }
}