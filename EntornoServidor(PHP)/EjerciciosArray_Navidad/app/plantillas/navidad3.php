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
<h2>Ejercicio 3</h2>
<p>Realizar un formulario de registro de clientes.
    El formulario debe solicitar:
    a. Nombre
    b. Apellidos
    c. Calle
    d. Ciudad
    e. Código Postal
    f. Provincia
    g. Teléfono
    h. Correo Electrónico
    Debe contar con dos botones: Enviar y Limpiar
    Cuando el cliente pulse el botón Enviar, la aplicación deberá sanear y comprobar la corrección de los datos
    introducidos por el cliente respecto de la entrada solicitada. En el caso de que algún dato no sea correcto, la
    aplicación informará al cliente del problema y le solicitará reintroducir los datos incorrectos. Cuando todos los
    datos sean correctos, la aplicación mostrará los datos introducidos en una página diferente.
    Cuando el cliente pulse el botón Limpiar, la aplicación deberá eliminar toda la entrada y mostrar un
    formulario limpio listo para cumplimentar.
    Todo lo anterior debe realizarse empleando al menos una clase Cliente que modele las características que
    solicita el formulario del ejercicio.
    (Este es un poco más largo, pero los principios son los mismos: Nombres de los controles y ¿ha pulsado el
    usuario el botón enviar?
    En este caso se pide que comprobéis consistencia de datos -algo que tal vez ya hayáis implementado en los
    dos anteriores-. Podéis repetir el ejercicio varias veces, primero de forma sencilla, preguntado si está vacío o
    no, si el contenido son caracteres numéricos o no, etc., y luego agregar más comprobaciones y, al final, la
    clase Cliente para comprobar la consistencia de datos e informar de posibles errores a través de una
    excepción.
    También pide que saneéis la entrada, esto es, impedir que contenga caracteres compatibles con la ejecución
    de scripts, eliminar los espacios y las barras inclinadas. Asimismo, os pide que mostréis errores, esto es,
    preguntar si existe un determinado dato de error, en forma de variable o de array y, si existe, mostrar el error
    que representa al usuario manteniendo, además, en el control de formulario el dato original que introdujo el
    usuario.
    Para mostrar otra página, ya sabéis, Location, haber iniciado la sesión donde guardar los datos y desde
    donde pueda recuperarlos la segunda página para mostrarlos – en la que también se deberá iniciar sesión) </p>
<form action="" method="post">


</form>

<?php
$contenido = ob_get_clean();
include 'base.php'; ?>