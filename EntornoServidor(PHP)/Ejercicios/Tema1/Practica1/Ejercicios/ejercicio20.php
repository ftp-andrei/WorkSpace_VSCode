<?php
function esPrimo($var)
{
    for ($i = 2; $i < $var; $i++) {
        if (($var % $i) == 0) {
            return false;
        }
    }
    return true;
}

function fibonacci($var)
{
    $fibonacci  = [0, 1];
    if (in_array($var, $fibonacci)) return true;
    else {
        for ($i = 2; $i <= $var; $i++) {
            $fibonacci[] = $fibonacci[$i - 1] + $fibonacci[$i - 2];
            if (in_array($var, $fibonacci)) {
                return true;
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 20</title>
</head>

<body>
    <p><b>
            Investiga las diferentes estructuras iterativas (y sus variantes) definidas por el lenguaje PHP. Investiga cuál es el comportamiento que define PHP para las sentencias break y continue. <br>

            En una página HTML, realiza guion PHP que muestre en el navegador del cliente los cien primeros números naturales, uno por línea, informando, además, de si el número es par o impar, si es primo o no y de si el número pertenece a la sucesión de Fibonacci o no. Emplea un tipo de bucle diferente para cada una de las iteraciones que necesites realizar. <br>

        </b>
        Break: Sale del bucle. <br>
        Continue: Se salta 1 numero y continua dentro del bucle. <br>

        <?php
        for ($var = 0; $var < 101; $var++) {
            echo 'El numero ' . $var . ': ';
            if (($var % 2) == 0) {
                echo 'Par, ';
            } else {
                echo 'Impar, ';
            }

            if (esPrimo($var) && $var != 1 || $var === 1) {
                echo 'primo, ';
            } else {
                echo 'no primo, ';
            }

            if (fibonacci($var)) {
                echo 'pertenece a la sucession de Fibonacci<br>';
            } else {
                echo 'no pertenece a la sucession de Fibonacci<br>';
            }
        }
        ?>


    </p>
</body>

</html>