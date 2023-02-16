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
<h2>Ejercicio 6</h2>
<p>Completa el ejercicio anterior informando al final de las notas obtenidas: cantidad de Muy deficiente, Deficiente, Insuficiente, Suficiente, Bien, Notable y Sobresaliente obtenidos, y después la nota media obtenida y cuál sería su nota en formato cadena.</p>
<?php if ($notas) {
  echo "Array notas: ";
  print_r($notas);
?>
  <table>
    <caption>Notas obtenidas</caption>
    <thead>
      <th>Nota</th>
      <th>Cantidad</th>
    </thead>
    <tbody>
      <?php
      foreach ($notaEscrita as $key => $nota) { ?>
        <tr>
          <td><?php echo $nota; ?></td>
          <td><?php echo $cantidad[$nota]; ?></td>
        </tr>
      <?php
      }
      ?>
      <tr>
        <th>Media</th>
        <td><?php echo $media ?></td>
      </tr>
    </tbody>
  </table>
<?php }
$contenido = ob_get_clean();
include 'base.php'; ?>