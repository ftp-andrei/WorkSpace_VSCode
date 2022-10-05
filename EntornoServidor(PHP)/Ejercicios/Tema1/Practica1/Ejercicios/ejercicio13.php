<?php
$sueldo_bruto = 2836.25;
$retencion = 15.75;
$cuota_SS = 385.60;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 13</title>
</head>

<body>
    <p><b>
            Investiga cómo se nombran las variables en PHP. Investiga las funciones matemáticas que define PHP.</b><br> A través de una o varias expresiones, calcula el sueldo neto del trabajador. Por último, muestra un informe como el siguiente:<br></p>
    <p align="right">
        <?php
        echo '<br>Sueldo bruto:  ' . round($sueldo_bruto, 2);
        echo '<br>Retención a cuenta del I.R.P.F.:  ' . round(($retencion * $sueldo_bruto) / 100, 2);
        echo '<br>Cuota SS a cargo del trabajador:  ' . bcadd(round($cuota_SS, 2), 0, 2);
        echo '<br>--------';
        echo '<br>Sueldo neto: ' . round($sueldo_bruto - (($retencion * $sueldo_bruto) / 100) - $cuota_SS, 2);
        ?>
    </p>
</body>

</html>