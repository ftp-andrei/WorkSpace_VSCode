<?php
//DEFINIR CONSTANTES
//Forma1
define('PI', pi());
define('E', exp(1));
//Forma2
const constPI = M_PI;
const constE = 2.7182818284590452353602874713527;

//DEFINIR VARIABLES
$varRadio = 102.75;
$varLog = exp(1.6094379124341); // Log neperiano
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 15</title>
</head>

<body>
    <p>
        <b>Investiga cómo se definen en PHP las constantes y cuáles son las normas de estilo que se suelen aplicar entre los programadores de PHP respecto a las constantes.</b><br>
        Con const o con define. Define se puede usar para mas cosas que solo constantes. La constante tenemos que inicializarla en el momento en el que la definimos.

        <br>


        <b>En una página HTML, define una constante para el valor de pi (3,1415926535897932384626433832795) y otra constante para el valor del número e (2,7182818284590452353602874713527). Define cada constante de una de las dos posibles formas de definir constantes.</b> <br>

        <?php
        echo 'Define pi: ' . PI . ' Constante: ' . constPI;
        echo '<br>Define E: ' . E . ' Constante: ' . constE;
        ?>

        <br><b>Define una variable radio (de una circunferencia) con un valor de 102,75 centímetros y un logaritmo neperiano con un valor de 1,6094379124341.</b><br>

        <?php
        echo 'Variable Radio: ' . $varRadio . ' cm';
        echo '<br>Variable Log: ' . $varLog;
        ?>

        <br><b>Utilizando las constantes y las variables definidas, muestra en la página HTML, de una forma elegante (CSS), los siguientes informes:<br>
            El perímetro de la circunferencia con un radio de XXX,XX centímetros es de X,XXXX metros </b><br>

        <?php
        echo 'El perímetro de la circunferencia con un radio de ' . round($varRadio, 2) . ' centímetros es ' . round(($varRadio * pi() * 2) / 100, 4) . ' m ';
        ?>

        <br><b>El número que representa el logaritmo neperiano X,XXXXXXXXXXXXX es X</b><br>

        <?php
        echo 'El número que representa el logaritmo neperiano ' . E . ' es ' . $varLog;
        ?>

        <br> <b>Vuelve a repetir el ejercicio, pero esta vez define las constantes por debajo de las sentencias que muestran el informe.</b><br>

        <?php
        const constantePI2 = M_PI;
        const constanteE2 = 2.7182818284590452353602874713527;
        define('constantePI', pi());
        define('constanteE', exp(1));

        echo constantePI . ' y ' . constanteE;
        echo '<br>' . constantePI2 . ' y ' . constanteE2;
        ?>

        <br> <b>¿Qué ha pasado? ¿Cuál es la diferencia entre las dos formas de definir constantes? ¿Qué restricción hay que observar con la forma más moderna de definir valores constantes?</b> <br>

        El define tiene un ambito global, con const no. <br>

        Mientras que define() permite definir una constante en una expresión arbitraria, la palabra const tiene restricciones.<br>

        Const solo permite expresiones escalares ( bool , int , float y string )

    </p>
</body>

</html>