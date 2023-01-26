<?php ob_start() ?>
<?php if (isset($errorGetDivision)) : ?>
    <p class="warning">No ha sido posible leer las divisiones actuales.<br>
        Por favor, introduzca el nombre de la División.
    </p>
<?php endif; ?>
<form action="" method="POST">
    <fieldset>
        <legend>Agregar nuevo departamento</legend>
        <p><label for="nombre">Nombre:</label>
            <input type="text" name="dep[nombre]" id="nombre" value="<?= isset($_POST['ok']) ? $_POST['dep']['nombre'] : '' ?>">
            <?= isset($errores['nombre']) ? '<span class="error">' . $errores['nombre'] . '</span>' : '' ?>
        </p>
        <p><label for="division">División
                <input type="text" name="dep[division]" list="divisiones" placeholder="¿En qué división?" 
                value="<?= isset($_POST['ok']) ? $_POST['dep']['division'] : '' ?>">
                <datalist id="divisiones">
                    <option value="">¿En que división?</option>
                    <?php foreach ($divisiones as $key => $value) : ?>
                        <option value="<?= $value ?>"><?= $value ?></option>
                    <?php endforeach; ?>
                </datalist>
            </label>
            <?= isset($errores['division']) ? '<span class="error">' . $errores['division'] . '</span>' : '' ?></p>
        <p><label for="fMod">Fecha modificación:</label>
            <input type="date" name="dep[fMod]" id="fMod" value="<?= isset($_POST['ok']) ? $_POST['dep']['fMod'] : '' ?>">
            <?= isset($errores['fMod']) ? '<span class="error">' . $errores['fMod'] . '</span>' : '' ?>
        </p>
        <input type="submit" name="ok" value="Agregar">
    </fieldset>
</form>
<?php $contenido = ob_get_clean();
include 'base.php' ?>