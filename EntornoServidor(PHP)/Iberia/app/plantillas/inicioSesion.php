<?php ob_start();

?>
<div class="centrar">
    <div class="enLinea">
        <form action="" method="post">
            <fieldset>
                <legend>Registrarse</legend>
                <div class="enFila">
                    <label for="nombre">Nombre:</label>
                    <input type="text" name="nombre" id="nombre">
                </div>
                <div class="enFila">
                    <label for="apellido">Apellido:</label>
                    <input type="text" name="apellido" id="apellido">
                </div>
                <div class="enFila">
                    <label for="DNI">DNI:</label>
                    <input type="text" name="DNI" id="DNI">
                </div>
                <div class="enFila">
                    <label for="fnac">Fecha nacimiento:</label>
                    <input type="date" name="fnac" id="fnac" value="2000-1-1" min="1900-1-1" max="2001-1-1">
                </div>
            </fieldset>
        </form>
    </div>
    <div class="enLinea">
        <form action="" method="post">
            <fieldset>
                <legend>Inicio de Sesion</legend>
                <div class="enFila">
                    <label for="user">Usuario:</label>
                    <input type="text" name="user" id="user">
                </div>
                <div class="enFila">
                    <label for="pass">Password:</label>
                    <input type="password" name="pass" id="pass">
                </div>
            </fieldset>
        </form>
    </div>
</div>
<div class="centrar">
    <input type="button" value="Entrar">
</div>

<?php
$contenido = ob_get_clean();
include 'base.php'; ?>