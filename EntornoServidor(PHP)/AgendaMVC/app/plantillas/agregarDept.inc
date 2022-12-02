<?php ob_start();
?>
<form action="" method="POST">
    <fieldset>
    <legend>Agregar nuevo departamento</legend>
    <label></label>
    <input type="text" id="nombre" name="dep(nombre)" value="">
    </fieldset>
</form>
<?php
$contenido = ob_get_clean();
include 'base.inc';