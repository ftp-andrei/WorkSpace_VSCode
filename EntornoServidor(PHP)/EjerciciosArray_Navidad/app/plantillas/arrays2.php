<?php
/* Ejemplo de plantilla que se mostrará dentro de la plantilla principal
  ob_start() activa el almacenamiento en buffer de la página. Mientras se
             almacena en el buffer no se produce salida alguna hacia el
             navegador del cliente
  luego viene el código html y/o php que especifica lo que debe aparecer en
     el cliente web
  ob_get_clean() obtiene el contenido del buffer (que se pasa a la variable
             $contenido) y elimina el contenido del buffer
  Por último se incluye la página que muestra la imagen común de la aplicación
    (en este caso base.php) la cual contiene una referencia a la variable
    $contenido que provocará que se muestre la salida del buffer dentro dicha
    página "base.php"
*/
ob_start();
?>
<h2>Ejercicio 2</h2>
<p>Realiza un guion PHP en el que se muestre la equivalencia en pesetas de las actuales denominaciones de monedas y billetes de euro. Recuerda que existen monedas de 1, 2, 5, 10, 20 y 50 céntimos de euro, y de 1 y 2 euros; y que existen billetes de 5, 10, 20, 50, 100, 200 y 500 euros. Utiliza un array PHP para realizar el ejercicio. Muestra los resultados en una tabla HTML y emplea CSS. Los resultados deben mostrarse con un máximo de 2 decimales.</p>
<form action="" method="post">


</form>

<?php
$contenido = ob_get_clean();
include 'base.php'; ?>