<?php
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
  donde pueda recuperarlos la segunda página para mostrarlos en la que también se deberá iniciar sesión) </p>
<form action="" method="post">
  <fieldset>
    <legend>Registro</legend>
    <label for="Nombre">Nombre: <input type="text" name="Nombre" id="Nombre" required></label>
    <label for="Apellido">Apellido: <input type="text" name="Apellido" id="Apellido" required></label><br>
    <label for="Calle">Calle: <input type="text" name="Calle" id="Calle" required></label>
    <label for="Ciudad">Ciudad: <input type="text" name="Ciudad" id="Ciudad" required></label>
    <label for="CodPostal">CodPostal: <input type="number" name="CodPostal" id="CodPostal" min="5" max="5" required></label><br>
    <label for="Provincia">Provincia<input type="text" name="Provincia" id="Provincia" required></label>
    <label for="Telefono">Telefono: <input type="tel" name="Telefono" id="Telefono" min="9" max="9" required></label>
    <label for="Correo">Correo: <input type="mail" name="Correo" id="Correo" required></label><br>
    <input type="submit" value="Registrar" name="okRegistro">
    <input type="submit" value="Limpiar" name="limpiar">
  </fieldset>
</form>

<?php
$contenido = ob_get_clean();
include 'base.php'; ?>