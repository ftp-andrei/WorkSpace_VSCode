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
<h2>Ejercicio 5</h2>
<p>Crea un guion PHP que informe de la nota obtenida en una materia determinada. Las notas válidas son: Muy deficiente, Deficiente, Insuficiente, Suficiente, Bien, Notable y Sobresaliente. La nota obtenida parte de una nota numérica generada por una función de aleatorización. La función de aleatorización debe generar un valor entero entre 0 y 10. Las equivalencias son:

  Las notas numéricas 0 y 1 corresponden a la nota Muy deficiente
  Las notas 2 y 3 corresponden a Deficiente
  La nota 4 a Insuficiente
  La nota 5 a Suficiente
  La nota 6 a Bien
  Las notas 7 y 8 a Notable
  Las notas 9 y 10 a Sobresaliente
  Mantén en un array PHP la información de notas y sus equivalentes de cadena.

  Obtén 20 valores aleatorios fuera del documento HTML, y muestra los resultados dentro del documento HTML. Emplea CSS para presentar el resultado.</p>
<form action="" method="post">


</form>

<?php
$contenido = ob_get_clean();
include 'base.php'; ?>