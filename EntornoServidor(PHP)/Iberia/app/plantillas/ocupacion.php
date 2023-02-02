<?php ob_start() ?>

<form action="" method="post">
    <fieldset>
        <legend>Mostrar ocupacion</legend>
        <label for="salida">Salir de: <input type="text" name="salida" id="salida"></label>
        <label for="destino">Destino: <input type="text" name="destino" id="destino"></label>
        <label for="ida">Ida: <input type="date" name="ida" id="ida"></label>
        <label for="vuelta">Vuelta: <input type="date" name="vuelta" id="vuelta"></label>
        <input type="submit" value="Buscar" name="ok" id="ok">
    </fieldset>

</form>

<?php
$contenido = ob_get_clean();
include 'base.php'; ?>