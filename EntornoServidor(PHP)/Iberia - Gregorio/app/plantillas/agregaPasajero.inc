<?php
ob_start();
?>

<form action="" method="post">
<fieldset>
    <legend>Datos de pasajero</legend>
    <label for="nombre">Nombre: 
        <input type="text" name="pasaj[nombre]" id="pasajnombre" value="<?= isset($pasaj['nombre'])?$pasaj['nombre']:'' ?>" required>
    </label>
    <?= isset($_POST['nombre'])?'<span class="error">'.$erroresPas['nombre'] .'</span>':'' ?>
    <label for="apellido">Apellido: <input type="text" name="pasaj[apellido]" id="pasaj[apellido]" value="<?= isset($pasaj['apellido'])?$pasaj['apellido']:'' ?>" required></label>
    <?= isset($_POST['apellido'])?'<span class="error">'.$erroresPas['apellido'] .'</span>':'' ?>
    <label for="dni">DNI: <input type="text" name="pasaj[dni]" id="pasaj[dni]" pattern="[0-9]{8}{A-Z}" value="<?= isset($pasaj['dni'])?$pasaj['dni']:'' ?>" required></label>
    <?= isset($_POST['dni'])?'<span class="error">'.$erroresPas['dni'] .'</span>':'' ?>
    <label for="fnac">Nacimiento: 
        <input type="date" name="pasaj[fnac]" id="pasaj[fnac]" value="<?= isset($pasaj['fnac'])?$pasaj['fnac']:'' ?>" required>
    </label>
    <?= isset($_POST['nacimiento'])?'<span class="error">'.$erroresPas['nacimiento'] .'</span>':'' ?>
</fieldset>
    </form>

<?php
$contenido = ob_get_clean();
include 'base.php';
?>