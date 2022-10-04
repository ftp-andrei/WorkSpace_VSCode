<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 18</title>
</head>

<body>
    <p>
        <b>En una página HTML, define tres variables $var1, $var2 y $var3 y asígnalas cualquier valor numérico. Muestra en el navegador del cliente información sobre las variables y sobre qué variable mantiene el valor mayor y qué variable mantiene el valor menor (y cuáles son esos valores)</b><br>
        <?php
        $var1 = 2;
        $var2 = 5;
        $var3 = 3;

        echo 'Info $var1: ' . $var1;
        echo '<br>Info $var2: ' . $var2;
        echo '<br>Info $var3: ' . $var3;
        echo '<br>Numero mayor: ' . max($var1, $var2, $var3);
        echo '<br>Numero menor: ' . min($var1, $var2, $var3);
        ?>
    </p>
</body>

</html>