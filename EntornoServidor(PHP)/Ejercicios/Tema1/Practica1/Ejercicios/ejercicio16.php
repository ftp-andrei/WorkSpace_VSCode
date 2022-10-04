<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 16</title>
</head>

<body>
    <p>
        <b>
            Investiga qué ámbito tienen las variables dentro de los guiones PHP.
            Vuelve a realizar el ejercicio 13 definiendo en guiones diferentes las variables que se emplean en el ejercicio. <br>
            Obtén los resultados que se solicitan en el ejercicio y verifica lo aprendido en la investigación sobre el ámbito de las variables en PHP.
        </b> <br>

        El ámbito de una variable es el contexto dentro del que la variable está definida. La mayor parte de las variables PHP sólo tienen un ámbito simple. <br>
        Este ámbito simple también abarca los ficheros incluídos y los requeridos.<br>
    <p align="right">
        <?php
        function hola()
        {
            $sueldo_bruto = 2836.25;
            $retencion = 15.75;
            $cuota_SS = 385.60;
            echo '<br>Sueldo bruto:  ' . round($sueldo_bruto, 2);
            echo '<br>Retención a cuenta del I.R.P.F.:  ' . round(($retencion * $sueldo_bruto) / 100, 2);
            echo '<br>Cuota SS a cargo del trabajador:  ' . round($cuota_SS, 2);
            echo '<br>--------';
            echo '<br>Sueldo neto: ' . round($sueldo_bruto - (($retencion * $sueldo_bruto) / 100) - $cuota_SS, 2);
        }
        hola();
        ?>
    </p>
    </p>
</body>

</html>