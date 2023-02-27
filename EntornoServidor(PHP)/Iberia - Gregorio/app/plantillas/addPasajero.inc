<?php ob_start(); ?>
<h1>Registro de pasajeros</h1>
<form method="post" action="">
  <fieldset>
    <legend>Datos del pasajero</legend>
    <label for="nombre">Nombre: 
      <input type="text" name="pasj[nombre]" id="nombre" 
          value="<?=isset($pasj['nombre'])?$pasj['nombre']:''?>" required>
      <?=isset($erroresPasj['nombre'])?'<span class="error">'.$erroresPasj['nombre'].'</span>':''?>
    </label>
    <label for="apellido">Apellido: 
      <input type="text" name="pasj[apellido]" id="apellido" 
          value="<?=isset($pasj['apellido'])?$pasj['apellido']:''?>" required>
      <?=isset($erroresPasj['apellido'])?'<span class="error">'.$erroresPasj['apellido'].'</span>':''?>
    </label>
    <label for="dni">DNI: 
      <input type="text" name="pasj[dni]" id="dni" 
             value="<?=isset($pasj['dni'])?$pasj['dni']:''?>" required> <!-- pattern="[0-9]{8}[A-Z]"> -->
      <?=isset($erroresPasj['dni'])?'<span class="error">'.$erroresPasj['dni'].'</span>':''?>
    </label>
    <label for="fNacimiento">Fecha de nacimiento: 
      <input type="date" name="pasj[fNacimiento]" id="fNacimiento" required 
              max="<?=(new DateTime('now'))->format('Y-m-d')?>"
             value="<?=isset($pasj['fNacimiento'])?$pasj['fNacimiento']:''?>">
      <?=isset($erroresPasj['fNacimiento'])?'<span class="error">'.$erroresPasj['fNacimiento'].'</span>':''?>
    </label>
  </fieldset>
  <input type="submit" value="Agregar el pasajero" name="okPasj">
</form>
<?php $contenido = ob_get_clean(); include 'base.php';?>