<?php ob_start() ?>
<form action="" method="post">
    <label for="colegiado">NumColegiado: <input type="text"></label>
    <input type="submit" value="Entrar" name="OkColegiado">
</form>


<?php $contenido = ob_get_clean() ?>

<?php include 'base.php' ?>