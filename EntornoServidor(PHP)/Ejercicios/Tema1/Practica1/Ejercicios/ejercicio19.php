<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 19</title>
</head>

<body>
    <p>
        <b>
            En una página HTML, realiza un código PHP tal que, dadas tres variables numéricas con valores arbitrarios, ordene los valores de menor a mayor en las variables. <br>
            Es decir, dadas las variables $var1 = 10, $var2 = 5 y $var3 = 6.2, tras el proceso de ordenación las variables han de quedar de esta forma $var1 = 5, $var2 = 6.2 y $var3 = 10. (Este proceso debe tener éxito para cualquier posible valor inicial que tengan las variables)
        </b>
        </br>
        <?php
        $var1 = 11;
        $var2 = 12;
        $var3 = 2;

        $arraynumerico = array($var1, $var2, $var3);
        sort($arraynumerico);

        echo 'Sin Ordenar = ' . $var1 . ', ' . $var2 . ', ' . $var3;
        $var1 = $arraynumerico[0];
        $var2 = $arraynumerico[1];
        $var3 = $arraynumerico[2];
        echo '<br>Ordenado = ' . $var1 . ', ' . $var2 . ', ' . $var3;
        ?>

    </p>
</body>

</html>