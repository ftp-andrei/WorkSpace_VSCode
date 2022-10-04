<?php
$var1 = 5230;
$var2 = 0;
$var3 = -45;
$var4 = true;
$var5 = false;
$var6 = 5230.23;
$var7 = -45.23;
$var8 = 0.0;
$var9 = "Lola la de las flores";
$var10 = "825";
$var11 = "0825";
$var12 = "450 loros";
$var13 = "Loros a 45.9";
$var14 = "48E4";
$var15 = "45.9";
$var16 = 0.6;
$var17 = 0.3;
$var18 = 10;
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 9</title>
</head>

<body>
    <p>Explora los tipos que define el lenguaje PHP y su alcance. Investiga los 4 tipos escalares que define PHP y las conversiones implícitas que realiza el lenguaje y las funciones que se pueden utilizar para realizar conversiones explícitas. Investiga las diferentes funciones que integra PHP para conocer el tipo de datos de las variables. Define las siguientes variables:
    </p>

    <?php
    //A mano no deja array ni bucle

    echo "La variable " . '$var1' . " es de tipo " . gettype($var1) . " y su valor es " . $var1 .
        "<br>La variable " . '$var2' . " es de tipo " . gettype($var2) . " y su valor es " . $var2 .
        "<br>La variable " . '$var3' . " es de tipo " . gettype($var3) . " y su valor es " . $var3 .
        "<br>La variable " . '$var4' . " es de tipo " . gettype($var4) . " y su valor es " . $var4 .
        "<br>La variable " . '$var5' . " es de tipo " . gettype($var5) . " y su valor es " . $var5 .
        "<br>La variable " . '$var6' . " es de tipo " . gettype($var6) . " y su valor es " . $var6 .
        "<br>La variable " . '$var7' . " es de tipo " . gettype($var7) . " y su valor es " . $var7 .
        "<br>La variable " . '$var8' . " es de tipo " . gettype($var8) . " y su valor es " . $var8 .
        "<br>La variable " . '$var9' . " es de tipo " . gettype($var9) . " y su valor es " . $var9 .
        "<br>La variable " . '$var10' . " es de tipo " . gettype($var10) . " y su valor es " . $var10 .
        "<br>La variable " . '$var11' . " es de tipo " . gettype($var11) . " y su valor es " . $var11 .
        "<br>La variable " . '$var12' . " es de tipo " . gettype($var12) . " y su valor es " . $var12 .
        "<br>La variable " . '$var13' . " es de tipo " . gettype($var13) . " y su valor es " . $var13 .
        "<br>La variable " . '$var14' . " es de tipo " . gettype($var14) . " y su valor es " . $var14 .
        "<br>La variable " . '$var15' . " es de tipo " . gettype($var15) . " y su valor es " . $var15 .
        "<br>La variable " . '$var16' . " es de tipo " . gettype($var16) . " y su valor es " . $var16 .
        "<br>La variable " . '$var17' . " es de tipo " . gettype($var17) . " y su valor es " . $var17 .
        "<br>La variable " . '$var18' . " es de tipo " . gettype($var18) . " y su valor es " . $var18;

    ?>
</body>

</html>