<?php
ob_start();
?>
<h2>Ejercicio 1</h2>
<p>Realiza un guion PHP en el que se muestren los valores en euros de las antiguas denominaciones de los billetes en pesetas. Hubo billetes de 100, 200, 500, 1000, 2000, 5000 y 10000 pesetas. Recuerda que un euro son 166,386 pesetas. Utiliza un array PHP para realizar el ejercicio. Utiliza un bucle for para calcular el valor en euros y un bucle foreach para mostrar los resultados en una tabla HTML. Emplea CSS. Los resultados deben mostrarse con un máximo de 2 decimales. Busca en la documentación de PHP qué funciones puedes emplear para mejorar el proceso.</p>

<table>
  <thead>
    <tr>
      <td>Pesetas</td>
      <td>Euros</td>
    </tr>
  </thead>
  <tbody>
    <?php
    if ($tablaPesetas) {
      foreach ($tablaPesetas as $key => $value) {
        echo "<tr><td>";
        echo $value;
        echo "</td><td>";
        echo number_format($value / 166.386, 2);
        echo "</td></tr>";
      }
    }
    ?>
  </tbody>
</table>
<?php
$contenido = ob_get_clean();
include 'base.php'; ?>