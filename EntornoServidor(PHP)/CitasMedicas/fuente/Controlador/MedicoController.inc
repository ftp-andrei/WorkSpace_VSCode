<?php
namespace app\CitasMedicas\controlador;

use app\CitasMedicas\repositorio\MedicoRepositorio;

// Ejemplo de controlador para página home de la aplicación
class MedicoController
{ 
  public function login(){
    if(isset($_POST['okColegiado'])){
      if($medico = (new MedicoRepositorio()) -> existeMedico($_POST['numColegiado'])){
        $_SESSION['medico'] = true;
        $_SESSION['numColegiado'] = $_POST['numColegiado'];
        header('Location: index.php?ctl=consultaPacientes');
      }else{
        $error= "Error: No existe medico";
      }
    }
  require __DIR__ . '/../../app/plantillas/login.inc';
  }

  public function consultaPacientes(){
    $citas = (new MedicoRepositorio()) -> getCitasMedico($_SESSION['numColegiado']);
    require __DIR__ . '/../../app/plantillas/consultaPacientes.inc';
  }
}