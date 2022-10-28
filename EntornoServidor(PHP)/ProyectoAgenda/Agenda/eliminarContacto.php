<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eliminar</title>
</head>

<body>
    <?php
    $nombreCompleto = htmlspecialchars($_REQUEST["nombre"]) . " " . htmlspecialchars($_REQUEST["apellidos"]);
    $file = fopen("agenda.txt", "w");
    $file = "agenda.txt";
    file_put_contents($file, $nombreCompleto);

    fclose($file);
    ?>
</body>

</html>