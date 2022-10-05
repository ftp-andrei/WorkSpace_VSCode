<?php
$var1 = 5230;
$var2 = 0;
$var3;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 17</title>
</head>

<body>
    <p>
        <b> Investiga las diferentes estructuras de decisión (y sus variantes) que define el lenguaje PHP. Investiga, también, los operadores relacionales que define PHP.
        </b><br>

        Estructuras de decision / control

        1. if 9. continue
        2. else 10. switch
        3. elseif/else if 11. declare
        4. while 12. return
        5. do-while 13. include/include_once
        6. for 14. require/require_once
        7. foreach 15. goto
        8. break 16. Sintaxis alternativas

        Operadores relacionales

        Operadores de igualdad (=), de comparación (< ,>, <=,>=) y lógicos (AND, OR, XOR, NOT)

                <b>
                    Realiza las operaciones que se describen a continuación y muestra el informe de la operación y resultado correspondiente, parecido al del apartado 2 del Ejercicio 12</b><br>

                <b>Divide $var1 entre $var2, pero si el valor del divisor es 0, debe mostrar el mensaje “División por 0, resultado infinito”.</b><br>
                <?php
                if (empty($var2)) {
                    echo 'División por 0, resultado infinito';
                } else {
                    echo 'El resultado de $var1 / $var2 es ' .  $var1 / $var2 . ' y el tipo de dato es ' . gettype($var1 / $var2);
                }
                ?>
                <br>
                <b>Multiplica $var1 por $var3, pero si alguna de las variables no existe todavía, debe asignarle el valor 1.</b><br>
                <?php
                if (isset($var1)) {
                    if (!isset($var3)) {
                        $var3 = 1;
                    }
                } else {
                    $var1 = 1;
                }
                echo 'El resultado de $var1 * $var3 es ' .  $var1 * $var3 . ' y el tipo de dato es ' . gettype($var1 * $var3);
                ?>


    </p>
</body>

</html>