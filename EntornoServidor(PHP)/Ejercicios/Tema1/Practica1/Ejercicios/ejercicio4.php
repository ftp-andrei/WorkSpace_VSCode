<?php
$nombre = "Andrei";
$estudio = "DAW2";
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>

<body>
    <p>
        Investiga las diferentes construcciones del lenguaje y/o funciones con las que se pueden enviar datos a la salida. Modifica el ejercicio 2 empleando esas construcciones/funciones para mostrar en el navegador los datos solicitados
    </p>

    <?php
    print "Hola me llamo " . $nombre . " y estudio " . $estudio;
    ?>
</body>

</html>