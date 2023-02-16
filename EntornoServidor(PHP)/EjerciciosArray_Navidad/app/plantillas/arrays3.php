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
<h2>Ejercicio 3</h2>
<p>Realice un guion PHP que muestre una especie de diccionario inglés/francés/castellano. Mantén los datos en arrays PHP (uno o más). Utiliza una tabla para mostrar los datos y emplea CSS. El diccionario debe contar con un mínimo de 20 entradas.</p>
<?php
if ($diccionario) { ?>
  <table>
    <thead>
      <tr>
        <?php
        foreach ($diccionario as $idioma => $arrPalabras) {
          echo "<td>";
          echo $idioma;
          echo "</td>";
        }
        var_dump($diccionario);
        ?>
      </tr>
    </thead>
    <tbody>
      <?php foreach ($diccionario as $idioma => $arrPalabras) { ?>
        <tr>
          <?php
          foreach ($arrPalabras as $posArr => $palabras) {
            echo "<td>";
            echo $diccionario[$idioma][$posArr];
            echo "</td>";
          }
          ?>
        </tr>
      <?php } ?>
    </tbody>
  </table>
<?php
}
$contenido = ob_get_clean();
include 'base.php'; ?>