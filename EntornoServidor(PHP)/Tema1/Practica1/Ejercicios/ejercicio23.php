<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 23</title>

    <style>
        table,
        td {
            border: 1px solid black;
        }

        table {
            border-collapse: collapse;
        }

        thead {
            text-align: center;
        }
    </style>
</head>

<body>
    <p>
        <b>Investiga la estructura de iteración alternativa al bucle for que es especialmente adecuada para recorrer arrays en PHP. </b><br>

        foreach (expresión_array as $valor) <br>
        sentencias<br>
        foreach (expresión_array as $clave => $valor)<br>
        sentencias<br><br>

        foreach ($array as $clave => $valor) {<br>
        echo "{$clave} => {$valor} ";<br>
        }<br>

        <br>
        <b>Recorre el array $meses2 empleando la estructura iterativa objeto de investigación. ¿Encuentras alguna diferencia en el recorrido? ¿Qué ventajas e inconvenientes ves entre las dos estructuras iterativas a la hora de recorrer arrays?</b><br>
        <?php
        $array = array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');

        foreach ($array as $clave => $valor) {
            echo "{$clave} => {$valor} ";
        }
        ?>
        <br>
        <b>Define un array $diasMes cuyas claves sean los nombres de los meses del año (asociativo) y sus valores los días del mes de la clave (febrero 28 días).</b><br>

        <?php
        $diasMes = [
            'Enero' => '31',
            'Febrero' => '28',
            'Marzo' => '31',
            'Abril' => '30',
            'Mayo' => '31',
            'Junio' => '30',
            'Julio' => '31',
            'Agosto' => '31',
            'Septiembre' => '30',
            'Octubre' => '31',
            'Noviembre' => '30',
            'Diciembre' => '31'
        ];

        print_r($diasMes);
        ?>
        <br>
        <b>¿Cómo se puede recorrer el array $diasMes?</b><br>
        <?php
        foreach ($diasMes as $clave => $valor) {
            echo "{$clave} => {$valor} ";
        }
        ?>
        <br>
        <b>Recorre el array $diasMes y muestra una tabla HTML en la ventana del navegador que muestre los datos que mantiene el array:</b><br>

    <table>
        <thead>
            <td><strong>Mes</strong></td>
            <td><strong>Días</strong></td>
            <td><strong>Mensaje</strong></td>
        </thead>
        <?php
        foreach ($diasMes as $clave => $valor) {
            echo "<tr>
            <td>$clave</td>
            <td>$valor</td>
            <td>El mes de $clave tiene $valor </td>
            </tr>";
        }
        ?>
    </table>
    </p>
</body>

</html>