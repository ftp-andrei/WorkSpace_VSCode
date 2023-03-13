<?php ob_start() ?>
<table>
    <caption>Pacientes del medico</caption>
</table>

<?php $contenido = ob_get_clean() ?>

<?php include 'base.php' ?>