<?php
ob_start();
?>

<form action="<?= htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post">
<fieldset>
    <legend>Datos para inicio de sesion</legend>
    <label for="correo">eCorreo: <input type="mail" name="correo" id="correo" required></label>
    <label for="password">Contraseña: <input type="password" name="password" id="password" required></label>
    <p>Aún no estoy registrado, <a href="index.php?ctl=nuevoCli">pincha aquí</a> para registrarte</p>
    <input type="submit" value="ok" name="ok" id="okiniSes">
</fieldset>

</form>


<?php
$contenido = ob_get_clean(); //end_clean?
include 'base.php';
?>