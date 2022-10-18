<?php
function perfecto($var)
{
    $suma = 0;
    for ($i = 1; $i < $var; $i++) {
        if ($var % $i == 0) {
            $suma = $suma + $i;
        }
    }
    return $suma == $var;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 21</title>
</head>

<body>
    <p><b>
            En una página HTML, realiza un guion PHP que muestre en el navegador del cliente los números perfectos que hay entre 1 y 10000. <br>

            Un número perfecto es aquel que es igual a la suma de sus divisores. Ejemplo: 6=1+2+3.
        </b><br>

        <?php

        for ($var = 1; $var < 10001; $var++) {
            if (perfecto($var)) {
                echo 'El numero ' . $var . ': Es perfecto.<br>';
            }
        }
        ?>
    </p>
</body>

</html>