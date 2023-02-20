<?php
ob_start();
?>
<h1>Registro de cliente</h1>
<!--  htmlspecialchars($_SERVER['PHP_SELF']) -->
<form action="" method="post">
<fieldset>
    <legend>Datos de pasajero</legend>
    <label for="nombre">Nombre: 
        <input type="text" name="pasaj[nombre]" id="pasajnombre" value="<?= isset($pasaj['nombre'])?$pasaj['nombre']:'' ?>" required>
    </label>
    <?= isset($_POST['nombre'])?'<span class="error">'.$erroresPas['nombre'] .'</span>':'' ?>
    <label for="apellido">Apellido: <input type="text" name="pasaj[apellido]" id="pasaj[apellido]" value="<?= isset($pasaj['apellido'])?$pasaj['apellido']:'' ?>" required></label>
    <?= isset($_POST['apellido'])?'<span class="error">'.$erroresPas['apellido'] .'</span>':'' ?>
    <label for="dni">DNI: <input type="text" name="pasaj[dni]" id="pasaj[dni]" pattern="[0-9]{8}{A-Z}" value="<?= isset($pasaj['dni'])?$pasaj['dni']:'' ?>" required></label>
    <?= isset($_POST['dni'])?'<span class="error">'.$erroresPas['dni'] .'</span>':'' ?>
    <label for="fnac">Nacimiento: 
        <input type="date" name="pasaj[fnac]" id="pasaj[fnac]" value="<?= isset($pasaj['fnac'])?$pasaj['fnac']:'' ?>" required>
    </label>
    <?= isset($_POST['nacimiento'])?'<span class="error">'.$erroresPas['nacimiento'] .'</span>':'' ?>
</fieldset>
<fieldset>
    <legend>Datos de inicio de sesion</legend>
    <label for="correo">eCorreo: 
        <input type="mail" name="usuariocorreo" id="usuariocorreo" required>
    </label>
    <label for="password">Contraseña: 
        <input type="password" name="usuariopassword" id="usuariopassword" required>
    </label>
    <label for="password2">Contraseña: 
        <input type="password" name="usuariopassword2" id="usuariopassword2" required>
        <?= isset($errorContrasena['password'])?'<span class="error">'.($errorContrasena['password']) .'</span>':'' ?>
    </label>
</fieldset>
<input type="submit" value="Registrarse" name="okReg">

</form>

<?php
$contenido = ob_get_clean();
include 'base.php';
?>