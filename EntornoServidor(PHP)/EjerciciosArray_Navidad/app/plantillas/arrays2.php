<?php
ob_start();
?>
<h2>Ejercicio 2</h2>
<p>Realiza un guion PHP en el que se muestre la equivalencia en pesetas de las actuales denominaciones de monedas y billetes de euro. Recuerda que existen monedas de 1, 2, 5, 10, 20 y 50 céntimos de euro, y de 1 y 2 euros; y que existen billetes de 5, 10, 20, 50, 100, 200 y 500 euros. Utiliza un array PHP para realizar el ejercicio. Muestra los resultados en una tabla HTML y emplea CSS. Los resultados deben mostrarse con un máximo de 2 decimales.</p>
<form action="" method="post">

  <fieldset id="fieldEj1">
    <legend>Conversor pesetas</legend>
    <label for="euros">Euros: <input type="text" name="euros" id="euros" value="0"></label>
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

<table>
  <thead>
    <tr>
      <td>Euros</td>
      <td>Pesetas</td>
    </tr>
  </thead>
  <tbody>
    <?php
    if ($tablaEuros) {
      foreach ($tablaEuros as $key => $value) {
        echo "<tr><td>";
        echo $value;
        echo "</td><td>";
        echo number_format($value * 166.386, 2);
        echo "</td></tr>";
      }
    }
    ?>
  </tbody>
</table>

<?php
$contenido = ob_get_clean();
include 'base.php'; ?>