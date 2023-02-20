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
<h2>Ejercicio 2</h2>
<p>Diseñar un formulario web que pida la altura y el diámetro de un cilindro en metros. Una vez el usuario
  introduzca los datos y pulse el botón calcular, se deberá calcular el volumen del cilindro y mostrarse el
  resultado en el navegador.
  (Este caso es similar al anterior, pero aquí, tal vez debáis emplear funciones relacionadas con valores
  numéricos y/o de precisión) </p>
<form action="" method="post">
  <label for="numero1">Altura: <input type="number" name="numero1" id="numero1" value="0" required></label>
  <label for="numero2">Diametro: <input type="number" name="numero2" id="numero2" value="0" required></label>
  <input type="submit" value="Ok" name="ok">
</form>
<?php
if (isset($_POST['ok'])) {
  echo 'Volumen: ' . bcmul(pi(), bcmul(bcpow(bcdiv($_POST['numero2'], 2, 2), 2, 2), $_POST['numero1'], 2), 2);
}
?>
<?php
$contenido = ob_get_clean();
include 'base.php'; ?>