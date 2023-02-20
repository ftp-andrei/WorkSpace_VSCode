<?php
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