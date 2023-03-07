<?php
// Ejemplo de controlador para página home de la aplicación
class DefaultController
{ 
  public function inicio()
  { 
    require __DIR__ . '/../../app/plantillas/inicio.php';
  }

  public function consultarPaciente(){
    if(isset($_POST['consultaPacientes'])){
      header('Location: ./consultaPacientes.inc');
      require_once __DIR__.'/../../fuente/Repositorio/MedicoRepositorio.inc';

      $_SESSION['Medico']=true;
      $_SESSION['numColegiado']=$_POST['numColegiado'];
  }
  require __DIR__ . '/../../app/plantillas/login.inc';
  }
}
