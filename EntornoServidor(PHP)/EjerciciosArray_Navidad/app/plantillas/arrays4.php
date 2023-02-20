<?php
ob_start();
?>
<h2>Ejercicio 4</h2>
<p>Realiza un guion PHP que muestre una especie de diccionario de la lengua española. El diccionario debe contar con un mínimo de 20 entradas. Utiliza un array PHP para realizar el ejercicio. Muestra los datos como desees, pero utiliza CSS para mostrar de forma elegante es información.</p>

<?php
if ($diccionario) { ?>
  <table>
    <caption>Diccionario</caption>
    <thead>
      <th>Palabra</th>
      <th>Significado</th>
    </thead>
    <tbody>
      <?php
      foreach ($diccionario as $palabra => $arrSignificado) { ?>
        <tr>
          <td><?php echo ucfirst($palabra) ?></td>
          <td><?php
              foreach ($arrSignificado as $indice => $significado) {
                echo $indice . " - " . $significado . "<br>";
              } ?></td>
        </tr>
      <?php } ?>
    </tbody>
  </table>


<?php
}
$contenido = ob_get_clean();
include 'base.php'; ?>