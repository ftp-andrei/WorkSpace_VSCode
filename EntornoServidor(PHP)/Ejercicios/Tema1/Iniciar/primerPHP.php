<?php
session_start();
$var = "Texto con var";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer PHP</title>
</head>

<body>
    <p <?= isset($_SESSION['vez']) ? 'style="color:red;"' : '' ?>>
        <?php
        echo $var;
        $_SESSION['vez'] = true;
        ?>
    </p>
</body>

</html>