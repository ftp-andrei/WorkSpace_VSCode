<?php
namespace app\CitasMedicas\controlador;
// TODO: Revisar namespaces
// Ejemplo de controlador para página home de la aplicación
class DefaultController
{ 
  public function inicio()
  { 
    if(isset($_POST['consultaPacientes'])){
      header('Location: index.php?ctl=login');
  }
    require __DIR__ . '/../../app/plantillas/inicio.php';
  }
}
