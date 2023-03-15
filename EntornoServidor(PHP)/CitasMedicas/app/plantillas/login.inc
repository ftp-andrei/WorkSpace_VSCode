<?php ob_start() ?>
<div id="login">
<form action="" method="post">
    <label for="colegiado">NumColegiado: <input type="password" maxlength="10" minlength="10" name="numColegiado" required></label>
    <input type="submit" value="Entrar" name="okColegiado" class="boton"> <br>
    <?=isset($medico)?"<span style='color:red'>".$error."</span>":""?>
</form>

<p>Medico Existente (para no buscar): 524852483H</p>
</div>
<?php 
$contenido = ob_get_clean();include 'base.php'; ?>