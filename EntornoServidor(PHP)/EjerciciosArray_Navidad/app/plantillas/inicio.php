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
<h1>Ejercicio 1</h1>
<p>Realiza un guion PHP en el que se muestren los valores en euros de las antiguas denominaciones de los billetes en pesetas. Hubo billetes de 100, 200, 500, 1000, 2000, 5000 y 10000 pesetas. Recuerda que un euro son 166,386 pesetas. Utiliza un array PHP para realizar el ejercicio. Utiliza un bucle for para calcular el valor en euros y un bucle foreach para mostrar los resultados en una tabla HTML. Emplea CSS. Los resultados deben mostrarse con un máximo de 2 decimales. Busca en la documentación de PHP qué funciones puedes emplear para mejorar el proceso.</p>
<form action="" method="post">

  <fieldset id="fieldEj1">
    <legend>Conversor pesetas</legend>
    <label for="euros">Euros: <input type="text" name="euros" id="euros"></label>
    <label>Pesetas: <input type="text" name="pesetas" value="
  <?php
  if (isset($euros)) {
    echo $euros;
  } else {
    echo 0;
  } ?>" disabled></label>
    <br>
    <input type="submit" value="Cambiar" name="btnCambio" id="btnCambio">
  </fieldset>
</form>

<?php
$arrPesetas = [100, 200, 500, 1000, 2000, 5000, 10000];
?>
<table>
  <thead>
    <tr>
      <td>Euros</td>
      <td>Pesetas</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <!-- 1 - 166
      X - 100
      100/166 
    
    Hacer bucle for-->
    </tr>
  </tbody>
</table>
<?php
$contenido = ob_get_clean();
include 'base.php'; ?>