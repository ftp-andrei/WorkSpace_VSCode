<?php ob_start(); ?>

<form action="" method="post">
  <label for="ss">NumSS: <input type="text" name="ss" required></label>
  <label for="especialidad">Especialidad:
    <select name="especialidad">
  <?php 
foreach ($especialidad as $key => $value) {
  echo "<option value=".$value['especialidad'].">".$value['especialidad']."</option>";
}
  ?>
</select>
  <label for="observaciones">Observaciones: <textarea name="observaciones" id="observaciones" cols="30" rows="1"></textarea></label>
  <p>Selecciona el dia y hora de la cita</p>
  <!-- hacer un getAllcitas -->
  <input type="submit" value="Solicitar" name="solicitar">
</form>

<?php $contenido = ob_get_clean() ?>

<?php include 'base.php' ?>