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

<h1>Bienvenido a Vuelos</h1>
<br>
<p>Este es el inicio de la pagina</p>
<br>
<p>Para mostrar vuelo selecciona "Mostrar Vuelo" en la parte superior del nav</p>
<br>
<p>Para comprar un billete de vuelo selecciona "Comprar vuelo" en la parte superior del nav</p>
<?php $contenido = ob_get_clean() ?>

<?php include 'base.php' ?>