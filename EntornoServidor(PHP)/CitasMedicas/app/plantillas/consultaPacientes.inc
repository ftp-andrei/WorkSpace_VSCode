<?php ob_start() ?>
<form action="" method="post">
<p>Estoy en consulta pacientes</p>

</form>

<?php $contenido = ob_get_clean() ?>

<?php include 'base.php' ?>