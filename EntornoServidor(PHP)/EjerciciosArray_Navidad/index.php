<?php
//index.php
session_start();
// Guardar array para usarlo en $_SESSION
error_reporting(E_ALL);
/* Aqui se registran funciones 
 Es el ultimo lugar en el que busca PHP para intentar resolver un tipo /interfaz..etc, antes de generar un error */
// Funcion anonima en este caso
spl_autoload_register(function (string $clase) {
  // Porcion del namespace que no tiene nada que ver con la estructura de directorios.
  if (strpos($clase, 'app\\iberia\\') === 0) {
    $nombre = str_replace('app\\iberia\\', '', $clase); // Reemplazamos la ruta
    $nombre = str_replace('\\', '/', $nombre); // Estrictamente hay que hacer esto
    require_once __DIR__ . '/fuente/' . $nombre . '.inc';
  }
  //Agregar aqui la conexion a bd, para no usar require_once
  require_once __DIR__ . '/core/conexionBd.inc';
});
/* Controladores */
require_once __DIR__ . '/fuente/Controlador/defaultController.inc';
/* Ubicación del archivo de rutas */
require_once __DIR__ . '/app/conf/rutas.inc';


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
  echo '<html>
  <body>
  <h1>Error 404: El controlador <i>' . $controlador['controller'] . '->' . $controlador['action'] . '</i> no existe</h1>
  </body>
  </html>';
}
