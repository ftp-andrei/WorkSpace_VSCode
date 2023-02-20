<?php
ob_start();
?>
<h2>Ejercicio 2</h2>
<p>Diseñar un formulario web que pida la altura y el diámetro de un cilindro en metros. Una vez el usuario
  introduzca los datos y pulse el botón calcular, se deberá calcular el volumen del cilindro y mostrarse el
  resultado en el navegador.
  (Este caso es similar al anterior, pero aquí, tal vez debáis emplear funciones relacionadas con valores
  numéricos y/o de precisión) </p>
<form action="" method="post">
  <label for="num1">Altura: <input type="number" name="num1" id="num1" value="0" required></label>
  <label for="num2">Diametro: <input type="number" name="num2" id="num2" value="0" required></label>
  <input type="submit" value="Ok" name="ok">
</form>
<?php
if (isset($_POST['ok'])) {
  echo $volumen;
}
$contenido = ob_get_clean();
include 'base.php'; ?>