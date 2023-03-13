<?php
namespace app\CitasMedicas\controlador;
// TODO: Revisar namespaces en repositorios y controladores
// Ejemplo de controlador para página home de la aplicación
class DefaultController
{ 
  public function inicio()
  { 
    if(isset($_POST['consultaPacientes'])){
      header('Location: index.php?ctl=login');
  }
  if(isset($_POST['solicitarCita'])){
    header('Location: index.php?ctl=solicitarcita');
}
    require __DIR__ . '/../../app/plantillas/inicio.php';
  }
}
