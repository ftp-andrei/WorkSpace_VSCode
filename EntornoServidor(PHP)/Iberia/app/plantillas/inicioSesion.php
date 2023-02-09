<?php ob_start();

?>
<div class="centrar">
    <div class="enLinea">
        <form action="" method="post">
            <fieldset>
                <legend>Registrarse</legend>
                <div class="enFila">
                    <label for="correo">Correo:</label>
                    <input type="mail" name="correo" id="correo">
                </div>
                <div class="enFila">
                    <label for="pass1">Password:</label>
                    <input type="password" name="pass1" id="pass1">
                </div>
                <div class="enFila">
                    <label for="pass2">Password:</label>
                    <input type="password" name="pass2" id="pass2">
                </div>
                <input type="button" value="Registrarse" name="registrarse">
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
                <input type="button" value="Entrar" name="entrar">
            </fieldset>
        </form>
    </div>
</div>

<?php
$contenido = ob_get_clean();
include 'base.php'; ?>