<?php ob_start(); ?>
<div class="centrar">
    <form action="" method="post">
        <div class="enLinea">
            <fieldset>
                <legend>Datos personales</legend>
                <div class="enFila">
                    <label for="Nombre">Nombre:</label>
                    <input type="text" name="Nombre" id="Nombre" required>
                </div>
                <div class="enFila">
                    <label for="Apellido">Apellido:</label>
                    <input type="text" name="Apellido" id="Apellido" required>
                </div>
                <div class="enFila">
                    <label for="fnac">Fecha nacimiento:</label>
                    <input type="date" name="fnac" id="fnac" required>
                </div>
                <div class="enFila">
                    <label for="DNI">DNI:</label>
                    <input type="text" name="DNI" id="DNI" minlength="9" maxlength="9" required>
                </div>
            </fieldset>
        </div>
        <div class="enLinea">
            <fieldset>
                <legend>Clave inicio</legend>
                <div class="enFila">
                    <label for="Correo">Correo:</label>
                    <input type="email" name="Correo" id="Correo" required>
                </div>
                <div class="enFila">
                    <label for="pass">Password:</label>
                    <input type="password" name="pass" id="pass" required>
                </div>
            </fieldset>
        </div>
        <br>
        <input type="button" value="Registrarse" name="registro">
    </form>
</div>

<?php
if (isset($_POST['registro'])) {
    echo $registrarUser . '<br>' . $registrarPasajero;
    var_dump($_SESSION['usuario']);
}

$contenido = ob_get_clean();
include 'base.php'; ?>