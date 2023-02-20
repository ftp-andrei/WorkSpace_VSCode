<?php
ob_start();
?>
<h2>Ejercicio 1</h2>
<p>Diseñar un formulario HTML que solicite dos números enteros. Una vez introducidos los números y enviado el
  formulario, el código PHP de la página que recibe los datos del mismo mostrará la suma, resta, multiplicación,
  división y resto de los números.
  (Recordad que cuando se trabaja con formularios, los nombres de los controles de formulario HTML -atributo
  name de input- llegan al módulo PHP como claves del array superglobal $_POST o $_GET -según lo que
  aparezca en el atributo method de form-. El módulo PHP puede conocer si el usuario ha enviado el
  formulario preguntando por la existencia, como clave, de alguno de los nombres de los controles en la
  superglobal $_POST o $_GET, por ejemplo, isset($_POST['ok']). Para mostrar el resultado podéis
  emplear un elemento p o un control INPUT TEXT de solo lectura) </p>
<form action="" method="post">
  <label for="numero1">Valor1: <input type="number" name="numero1" id="numero1" value="0"></label>
  <label for="numero2">Valor2: <input type="number" name="numero2" id="numero2" value="0"></label>
  <input type="submit" value="Ok" name="ok">
</form>

<?php
if (isset($_POST['ok'])) {
  echo $suma . "<br>" . $resta . "<br>" . $multiplicacion . "<br>" . $division;
}
$contenido = ob_get_clean();
include 'base.php'; ?>