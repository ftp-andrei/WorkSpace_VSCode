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
if (isset($_POST['ok'])) { ?>
  <p>La suma de <?php echo $_POST['numero1'] ?> y <?php echo $_POST['numero2'] ?> es: <?php echo $_POST['numero1'] + $_POST['numero2'] ?> </p>
  <p>La resta de <?php echo $_POST['numero1'] ?> y <?php echo $_POST['numero2'] ?> es: <?php echo $_POST['numero1'] - $_POST['numero2'] ?> </p>
  <p>La multiplicación de <?php echo $_POST['numero1'] ?> y <?php echo $_POST['numero2'] ?> es: <?php echo $_POST['numero1'] * $_POST['numero2'] ?> </p>
  <?php if ($_POST['numero2'] != 0) { ?>
    <p>La división de <?php echo $_POST['numero1'] ?> y <?php echo $_POST['numero2'] ?> es: <?php echo number_format($_POST['numero1'] / $_POST['numero2'], 2) ?> </p>
  <?php } else { ?>
    <p>No se puede dividir un numero por 0</p>
<?php
  }
}
$contenido = ob_get_clean();
include 'base.php'; ?>