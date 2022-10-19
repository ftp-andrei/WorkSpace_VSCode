<?php
$array = [
    $var1 = 5230,
    $var2 = 0,
    $var3 = -45,
    $var4 = true,
    $var5 = false,
    $var6 = 5230.23,
    $var7 = -45.23,
    $var8 = 0.0,
    $var9 = "Lola la de las flores",
    $var10 = "825",
    $var11 = "0825",
    $var12 = "450 loros",
    $var13 = "Loros a 45.9",
    $var14 = "48E4",
    $var15 = "45.9",
    $var16 = 0.6,
    $var17 = 0.3,
    $var18 = 10
]
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 26</title>
</head>

<body>
    <p><b>
            Sigue investigando sobre arrays. Los arrays, ¿qué tipos de elementos pueden contener? ¿Tienen que ser los elementos del array todos del mismo tipo? </b> <br>
        Puede ser de cualquier tipo. No es necesario que sean del mismo. <br>

        <b>Investiga las funciones que define PHP que se pueden emplear con los arrays. </b> <br>
        <a href="https://www.php.net/manual/en/ref.array.php" target="_blank">Funciones Arrays</a> <br>

        <b>Partiendo de los valores de las variables del Ejercicio 9, define un array llamado $valores que contenga los valores de las variables. Recorre el array con un bucle for y muestra en el navegador un informe parecido al del ejercicio 9:
            El elemento valorClave del array es de tipo tipoDatosElemento y su valor es valor </b><br>
    </p>
    <?php foreach ($array as $valor => $clave) : ?>
        <p>
            El elemento var<?= $valor + 1 ?> del array es de tipo <?= gettype($clave) ?> y su valor es <?= $clave ?>
        </p>
    <?php endforeach; ?>

</body>

</html>