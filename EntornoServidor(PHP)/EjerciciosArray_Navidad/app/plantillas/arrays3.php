<?php
ob_start();
?>
<h2>Ejercicio 3</h2>
<p>Realice un guion PHP que muestre una especie de diccionario inglés/francés/castellano. Mantén los datos en arrays PHP (uno o más). Utiliza una tabla para mostrar los datos y emplea CSS. El diccionario debe contar con un mínimo de 20 entradas.</p>
<?php
if ($diccionario) { ?>
  <table>
    <caption>Diccionario</caption>
    <tbody>
      <?php foreach ($diccionario as $idioma => $arrPalabras) { ?>
        <tr>
          <th><?php echo ucfirst($idioma) ?></th>
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