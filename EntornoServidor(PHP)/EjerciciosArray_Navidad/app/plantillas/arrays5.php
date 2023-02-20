<?php
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
<?php if ($notas) { ?>
  <p>El contenido del array es: </p>
  <?php print_r($notas);
  if ($notaEscrita) { ?>
    <table>
      <caption>Notas</caption>
      <thead>
        <th>Indice</th>
        <th>Nota</th>
        <th>Resultado</th>
      </thead>
      <tbody>
        <?php
        foreach ($notas as $indice => $nota) { ?>
          <tr>
            <td><?php echo $indice + 1 ?></td>
            <td><?php echo $nota ?></td>
            <td><?php echo $notaEscrita[$nota]; ?> </td>
          </tr>
        <?php } ?>
      </tbody>
    </table>

<?php
  }
}
$contenido = ob_get_clean();
include 'base.php'; ?>