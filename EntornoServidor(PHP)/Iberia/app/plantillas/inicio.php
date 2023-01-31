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
?>
<?php ob_start() ?>

<form action="" method="post">
  <fieldset>
    <legend>Buscador de vuelos</legend>
    <label for="salida">Salir de: <input type="text" name="salida" id="salida"></label>
    <label for="destino">Destino: <input type="text" name="destino" id="destino"></label>
    <label for="ida">Ida: <input type="date" name="ida" id="ida"></label>
    <label for="vuelta">Vuelta: <input type="date" name="vuelta" id="vuelta"></label>
    <input type="submit" value="Buscar" name="ok" id="ok">
  </fieldset>

</form>
<?php $contenido = ob_get_clean() ?>

<?php include 'base.php' ?>