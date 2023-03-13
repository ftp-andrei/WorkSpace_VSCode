<?php
//index.php
session_start();
error_reporting(E_ALL);
/* Aqui se registran funciones 
 Es el ultimo lugar en el que busca PHP para intentar resolver un tipo /interfaz..etc, antes de generar un error */
spl_autoload_register(function (string $clase) {
  if (strpos($clase, 'app\\CitasMedicas\\') === 0) {
    $nombre = str_replace('app\\CitasMedicas\\', '', $clase);
    $nombre = str_replace('\\', '/', $nombre);
    require_once __DIR__ . '/fuente/' . $nombre . '.inc';
  }
});

if (isset($_SESSION['medico'])) {
  $_SESSION['medico'] = false;
}
// require_once __DIR__ . '/fuente/Controlador/MedicoController.inc';
// require_once __DIR__ . '/fuente/Controlador/defaultController.inc'; /*controladores */
require_once __DIR__ . '/app/conf/rutas.inc'; /*Ubicación del archivo de rutas*/


// Parseo de la ruta
if (isset($_GET['ctl'])) {
  if (isset($mapeoRutas[$_GET['ctl']])) {
    $ruta = $_GET['ctl'];
  } else {
    header('Status: 404 Not Found');
    echo '<html><body><h1>Error 404: No existe la ruta <i>' .
      $_GET['ctl'] .
      '</p></body></html>';
    exit;
  }
} else {
  $ruta = 'inicio';
}

$controlador = $mapeoRutas[$ruta];
// Ejecución del controlador asociado a la ruta

if (method_exists($controlador['controller'], $controlador['action'])) {
  call_user_func(array(new $controlador['controller'], $controlador['action']));
} else {
  header('Status: 404 Not Found');
  echo '<html><body><h1>Error 404: El controlador <i>' .
    $controlador['controller'] .
    '->' . $controlador['action'] .
    '</i> no existe</h1></body></html>';
}
