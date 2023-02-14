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
<?php ob_start();
$destinos = $_SESSION['destinos'];
?>

<form action="" method="post">
  <fieldset>
    <legend>Buscador de vuelos</legend>
    <label for="salida">Salir de: <input list="listaSalida" name="salida" id="salida"></label>
    <datalist id="listaSalida">
      <?php foreach ($destinos as $key) {
        echo "<option value='$key'>";
      } ?>
    </datalist>
    <label for="destino">Destino: <input list="listaDestino" name="destino" id="destino"></label>
    <datalist id="listaDestino">
      <?php
      foreach ($destinos as $key) {
        echo "<option value='$key'>";
      }
      ?>
    </datalist>
    <label for="ida">Ida: <input type="date" name="ida" id="ida"></label>
    <label for="vuelta">Vuelta: <input type="date" name="vuelta" id="vuelta"></label>
    <input type="submit" value="Buscar" name="ok" id="ok">
    <!-- A añadido los pasajeros -->
  </fieldset>

</form>
<?php
if (isset($vuelos)) { ?>
  <table>
    <thead>
      <caption>Resultado</caption>
      <th>&nbsp;</th>
      <th>Código</th>
      <th>Origen</th>
      <th>Destino</th>
      <th>Salida</th>
      <th>Duración</th>
      <th>Fecha</th>
    </thead>

    <tbody>
      <tr>
        <td>Ida:</td>
        <?php foreach ($vuelos as $ida => $value) {
          if ($ida === 'ida') {
            foreach ($value as $arrayIda => $value2) {
              foreach ($value2 as $valoresIda => $valor) {
        ?>
                <td><?php echo $valor;  ?></td>
        <?php  }
            }
          }
        } ?>
      </tr>
      <tr>
        <td>Vuelta:</td>
        <?php foreach ($vuelos as $ida => $value) {
          if ($ida === 'vuelta') {
            foreach ($value as $arrayIda => $value2) {
              foreach ($value2 as $valoresIda => $valor) {
        ?>
                <td><?php echo $valor;  ?></td>
        <?php  }
            }
          }
        } ?>
      </tr>
    </tbody>
  </table>
<?php }
$contenido = ob_get_clean();
include 'base.php'; ?>