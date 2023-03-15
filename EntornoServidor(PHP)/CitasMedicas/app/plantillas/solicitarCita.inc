<?php ob_start(); ?>

<form action="" method="post">
  <label for="ss">NumSS: <input type="text" name="ss" minlength="10" maxlength="10" required></label>
 <?= isset($citas)?"<span style='color:red'>".$error."</span>":"" ?>
  <label for="especialidad">Especialidad:
    <select name="especialidad">
  <?php 
foreach ($especialidad as $key => $value) {
  echo "<option value='".$value['especialidad'] ."' >".$value['especialidad']."</option>";
}
  ?>
</select>
  <label for="observaciones">Observaciones: <textarea name="observaciones" id="observaciones" cols="30" rows="1"></textarea></label> 
  <p>Selecciona el dia y hora de la cita</p>
  <!-- Poner fechas a partir de hoy -->
  <!-- 	<input type="datetime-local"> , interesante -->
  <label for="dia">Dia: <input type="date" name="dia" min="<?=date('Y-m-d')?>" required></label>
  <label for="dia">Hora: <input type="time" name="hora" required></label>
  <!-- hacer un getAllcitas -->
  <input type="submit" value="Solicitar" name="solicitar" class="boton">
</form>

<?php 
if(isset($citas)){ ?>
<table>
  <caption>Citas del paciente con NumSS: <?=$citas[0]['numss'] ?></caption>
  <thead>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Especialidad</th>
    <th>Fecha cita</th>
    <th>Hora cita</th>
    <th>Observaciones</th>
  </thead>
  <tbody>
    <?php 
    foreach ($citas as $key => $value) { ?>
    <tr>
      <td><?= $value['nombre']?></td>
      <td><?= $value['apellido']?></td>
      <td><?= $value['Especialidad']?></td>
      <td><?= $value['fcita']?></td>
      <td><?= $value['hcita']?></td>
      <td><?= $value['Observaciones']?></td>
    </tr>
  <?php  } ?>
  </tbody>
</table>
<?php }

$contenido = ob_get_clean();
 include 'base.php'; ?>