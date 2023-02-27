<?php ob_start(); ?>
<form action="<?php htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
  <fieldset>
    <legend>Datos para el inicio de sesión</legend>
    <label for="eCorreo">ECorreo: <input type="email" name="eCorreo" id="eCorreo" required></label>
    <label for="pass">Contraseña: <input type="password" name="pass" id="pass" required></label>
    <p><a href="index.php?ctl=nuevoCli">Aún no estoy registrado</a></p>
    <input type="submit" value="Iniciar Sesión" name="okIniSes">
  </fieldset>
</form>

<?php $contenido=ob_get_clean(); include 'base.php'; ?>