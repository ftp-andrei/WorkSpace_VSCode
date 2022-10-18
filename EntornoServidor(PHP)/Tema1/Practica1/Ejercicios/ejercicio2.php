<?php
// 2-Poniendo todo en una sola variable
$nombreVariable = "2- Mi nombre es Andrei y estudio DAW2 <br>";

// 3- Concatenando variables
$nombre = "Andrei";
$estudios = "DAW2";
$resultado = "3- Mi nombre es " . $nombre . " y estudio " . $estudios;
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>

<body>
    <p>
        Crea un documento HTML e incluye en él código que muestre en el navegador tu nombre y estudios que estás realizando. Emplea diferentes formas PHP de llevar a la salida los datos que deseas mostrar
    </p>

    <?php
    // 1- Sin variables

    echo "1- Mi nombre es Andrei y estudio DAW2 <br>" . $nombreVariable . $resultado;
    ?>

    // echo, print
</body>

</html>