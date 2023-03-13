<?php ob_start() ?>
<form action="" method="post">
    <label for="colegiado">NumColegiado: <input type="text" maxlength="10" minlength="10" required></label>
    <input type="submit" value="Entrar" name="okColegiado">
</form>


<?php $contenido = ob_get_clean() ?>

<?php include 'base.php' ?>