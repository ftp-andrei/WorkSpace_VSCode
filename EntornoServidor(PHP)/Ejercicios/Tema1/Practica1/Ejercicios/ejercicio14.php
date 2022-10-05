<?php
$var1 = 5230;
$var2 = 0;
$var3;
$var4 = true;
$var5 = false;
$var6 = '';
$var7 = "Lola la de las flores";
$var8 = null;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 14</title>
</head>

<body>
    <p>Define en una página HTML las siguientes variables y asígnales los valores que aparecen a su lado (si es que aparecen):<br><br>

    <table border="1px">
        <tr>
            <td><strong>Expresión</strong></td>
            <td><strong>Tipo de datos de la
                    expresión</strong></td>
            <td><strong>Tiene un valor</strong></td>
            <td><strong>Tiene un valor NULL</strong></td>
            <td><strong>Está definida</strong></td>
        </tr>

        <tr>
            <td><?php echo 'Variable $var1. Valor: ' . $var1 ?></td>
            <td><?php echo gettype($var1) ?></td>
            <td><?php echo !empty($var1) ?></td>
            <td><?php echo is_null($var1) ?></td>
            <td><?php echo isset($var1) ?></td>
        </tr>
        <tr>
            <td><?php echo 'Variable $var2. Valor: ' . $var2 ?></td>
            <td><?php echo gettype($var2) ?></td>
            <td><?php echo !empty($var2) ?></td>
            <td><?php echo is_null($var2) ?></td>
            <td><?php echo isset($var2) ?></td>
        </tr>
        <tr>
            <td><?php echo 'Variable $var3. Valor: Da error' ?></td>
            <td><?php echo 'Al no estar definido da error' ?></td>
            <td><?php echo !empty($var3) ?></td>
            <td><?php echo 'Al no estar definido da error' ?></td>
            <td><?php echo isset($var3) ?></td>
        </tr>
        <tr>
            <td><?php echo 'Variable $var4. Valor: ' . $var4 ?></td>
            <td><?php echo gettype($var4) ?></td>
            <td><?php echo !empty($var4) ?></td>
            <td><?php echo is_null($var4) ?></td>
            <td><?php echo isset($var4) ?></td>
        </tr>
        <tr>
            <td><?php echo 'Variable $var5. Valor: ' . $var5 ?></td>
            <td><?php echo gettype($var5) ?></td>
            <td><?php echo !empty($var5) ?></td>
            <td><?php echo is_null($var5) ?></td>
            <td><?php echo isset($var5) ?></td>
        </tr>
        <tr>
            <td><?php echo 'Variable $var6. Valor: ' . $var6 ?></td>
            <td><?php echo gettype($var6) ?></td>
            <td><?php echo !empty($var6) ?></td>
            <td><?php echo is_null($var6) ?></td>
            <td><?php echo isset($var6) ?></td>
        </tr>
        <tr>
            <td><?php echo 'Variable $var7. Valor: ' . $var7 ?></td>
            <td><?php echo gettype($var7) ?></td>
            <td><?php echo !empty($var7) ?></td>
            <td><?php echo is_null($var7) ?></td>
            <td><?php echo isset($var7) ?></td>
        </tr>
        <tr>
            <td><?php echo 'Variable $var8. Valor: ' . $var8 ?></td>
            <td><?php echo gettype($var8) ?></td>
            <td><?php echo !empty($var8) ?></td>
            <td><?php echo is_null($var8) ?></td>
            <td><?php echo isset($var8) ?></td>
        </tr>

    </table>



    </p>
</body>

</html>