<?php
$diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 29</title>
</head>

<body>
    <p><b>En el array $diasSemana del ejercicio 25, elimina el elemento “jueves” del array. </b> <br>
        <?php
        foreach ($diasSemana as $clave => $valor) {
            if ($valor == "jueves") {
                unset($diasSemana[$clave]);
                echo "Elemento eliminado. <br>";
            }
        }
        ?>
        <b>Recorre ahora el array mostrando el valor de los índices y el valor del elemento al que referencian.</b> <br>

        <?php

        foreach ($diasSemana as $clave => $valor) {
            echo "{$clave} => {$valor} ";
        }
        ?>

        <br><b>¿Qué ha pasado con los índices? </b><br>
        Que al borrar la clave, borras el valor, y por consecuencia el indice del array. <br>
        <b>¿Cómo se puede hacer para que vuelvan a ser consecutivos? Hazlo y comprueba</b><br>
        <?php
        echo "Con array_values.<br>";
        $diasSemana = array_values($diasSemana);
        print_r($diasSemana);
        ?>
    </p>
</body>

</html>