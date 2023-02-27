<?php ob_start(); ?>
<h1>Registro de cliente</h1>
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
  <fieldset>
    <legend>Datos de inicio de sesión</legend>
    <label for="eCorreo">ECorreo: 
      <input type="email" name="usu[eCorreo]" id="eCorreo" required autocomplete="off">
      <?=isset($erroresUsu['eCorreo'])?'<span class="error">'.$erroresUsu['eCorreo'].'</span>':''?>
    </label>
     <!-- Mirar lo de las contraseñas -->
    <label for="pass1">Contraseña: <input type="password" name="usu[pass1]" id="pass1" required></label>
    <label for="pass2">Contraseña: <input type="password" name="usu[pass2]" id="pass2" required></label>
    <?=isset($erroresUsu['pass'])?'<span class="error">'.$erroresUsu['pass'].'</span>':''?>
    <?=isset($errorContrDif)?'<span class="error">'.$errorContrDif.'</span>':''?>
  </fieldset>
  <input type="submit" value="Registrar" name="okReg">
</form>
<?php $contenido = ob_get_clean(); include 'base.php';?>