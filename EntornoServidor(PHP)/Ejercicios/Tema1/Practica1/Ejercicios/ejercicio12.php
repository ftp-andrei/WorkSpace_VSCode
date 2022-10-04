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

/*
    NO LO HE TERMINADO
*/
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 12</title>
</head>

<body>

    <p>
    <h1>Ejercicio 12</h1>
    <b>Variables:</b>
    <br>$var1 = 5230;
    <br>$var2 = 0;
    <br>$var3 = -45;
    <br>$var4 = true;
    <br>$var5 = false;
    <br>$var6 = 5230.23;
    <br>$var7 = -45.23;
    <br>$var8 = 0.0;
    <br>$var9 = "Lola la de las flores";
    <br>$var10 = "825";
    <br>$var11 = "0825";
    <br>$var12 = "450 loros";
    <br>$var13 = "Loros a 45.9";
    <br>$var14 = "48E4";
    <br>$var15 = "45.9";
    <br>$var16 = 0.6;
    <br>$var17 = 0.3;
    <br>$var18 = 10;

    <br><br>
    <b>
        1. Realiza de cabeza (papel y lápiz) las siguientes operaciones, determinando cuál va a ser el resultado de la
        operación y cuál el tipo de datos resultante:
    </b> <br>

    <br>$var1 + $var3 = 5185
    <br>$var3 + $var5 = -45
    <br>$var10 * $var1 = 825
    <br>$var1 / $var10 = 6,339393939393939
    <br>$var11 + $var3 = 780
    <br>$var9 - $var3 = Error: no puedes juntar String con Int
    <br>$var3 + $var12 = Error: no puedes juntar String con Int
    <br>$var13 + $var8 = Error: no puedes juntar String con Int
    <br>$var3 * $var14 = Se multiplica pero nose que numero es 48e4
    <br>$var18 + $var15 = 55,9
    <br>$var10++ = 825
    <br>--$var11 = 824
    <br>$var1 && $var9 = Error: no puedes juntar int con String
    <br>$var8 || $var12 = Error: no puedes juntar int con String
    <br>!$var11 = ?
    <br>!$var10 = ?
    <br>!$var13 = ?
    <br>$var13 && $var8 = Error: no puedes juntar double con String
    <br>$var13 || $var8 = Error: no puedes juntar int con String
    <br>$var4 . $var5 = 1
    <br>$var4 . $var1 = 15230
    <br>$var10 . $var13 = 827Loros a 45.9
    <br>$var14 . $var16 = 48E40.6
    <br>$var1 . $var9 = 5230Lola la de las flores
    <br>$var1 . $var3 = 5230-45
    <br><br>

    <b>2. Con todas y cada una de las operaciones anteriores, muestralo en la ventana del navegador</b> <br>
    </p>
    <?php

    echo 'El resultado de $var1 + $var3 es ' .  $var1 + $var3 . ' y el tipo de dato es ' . gettype($var1 + $var3) .
        '<br>El resultado de $var3 + $var5 es ' .  $var3 + $var5 . ' y el tipo de dato es ' . gettype($var3 + $var5) .
        '<br>El resultado de $var10 * $var1 es ' .  $var10 * $var1 . ' y el tipo de dato es ' . gettype($var10 * $var1) .
        '<br>El resultado de $var1 / $var10 es ' .  $var1 / $var10 . ' y el tipo de dato es ' . gettype($var1 / $var10) .
        '<br>El resultado de $var11 + $var3 es ' .  $var11 + $var3 . ' y el tipo de dato es ' . gettype($var11 + $var3) .
        //No soporta string - int'<br>AEl resultado de $var9 - $var3 es ' .  $var9 - $var3 . ' y el tipo de dato es ' . gettype($var9 - $var3) .
        //Cadena + num negativo'<br>El resultado de $var3 + $var12  es ' .  $var3 + $var12  . ' y el tipo de dato es ' . gettype($var3 + $var12) .
        //No soporta string + float'<br>El resultado de $var13 + $var8 es ' .  $var13 + $var8 . ' y el tipo de dato es ' . gettype($var13 + $var8) .
        '<br>El resultado de $var3 * $var14 es ' .  $var3 * $var14 . ' y el tipo de dato es ' . gettype($var3 * $var14) .
        '<br>El resultado de $var18 + $var15 es ' .  $var18 + $var15 . ' y el tipo de dato es ' . gettype($var18 + $var15) .
        '<br>El resultado de $var10++ es ' .  $var10++ . ' y el tipo de dato es ' . gettype($var10++) .
        '<br>El resultado de --$var11 es ' .  --$var11 . ' y el tipo de dato es ' . gettype(--$var11) .
        //Da 1'<br>El resultado de $var1 && $var9 es ' .  $var1 && $var9 . ' y el tipo de dato es ' . gettype($var1 && $var9) .
        //Da 1'<br>El resultado de $var8 || $var12 es ' .  $var8 || $var12 . ' y el tipo de dato es ' . gettype($var8 || $var12) .
        '<br>El resultado de !$var11  es ' .  !$var11  . ' y el tipo de dato es ' . gettype(!$var11) .
        '<br>El resultado de !$var10 es ' .  !$var10 . ' y el tipo de dato es ' . gettype(!$var10) .
        '<br>El resultado de !$var13 es ' .  !$var13 . ' y el tipo de dato es ' . gettype(!$var13) .
        //Da 1'<br>El resultado de $var13 && $var8 es ' .  $var13 && $var8 . ' y el tipo de dato es ' . gettype($var13 && $var8) .
        //Da 1'<br>AEl resultado de $var13 || $var8 es ' .  $var13 || $var8 . ' y el tipo de dato es ' . gettype($var13 || $var8) .
        '<br>El resultado de $var4 . $var5 es ' .  $var4 . $var5 . ' y el tipo de dato es ' . gettype($var4 . $var5) .
        '<br>El resultado de $var4 . $var1 es ' .  $var4 . $var1 . ' y el tipo de dato es ' . gettype($var4 . $var1) .
        '<br>El resultado de $var10 . $var13 es ' .  $var10 . $var13 . ' y el tipo de dato es ' . gettype($var10 . $var13) .
        '<br>El resultado de $var14 . $var16 es ' .  $var14 . $var16 . ' y el tipo de dato es ' . gettype($var14 . $var16) .
        '<br>El resultado de $var1 . $var9 es ' .  $var1 . $var9 . ' y el tipo de dato es ' . gettype($var1 . $var9) .
        '<br>El resultado de $var1 . $var3 es ' .  $var1 . $var3 . ' y el tipo de dato es ' . gettype($var1 . $var3);
    ?>
</body>

</html>