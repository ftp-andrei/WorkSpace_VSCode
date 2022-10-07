<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 25</title>
</head>

<body>

</body>
<p><b>Define el array $diasSemana de la siguiente manera: $diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo",];</b> <br>

    <?php

    $diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    print_r($diasSemana);
    ?>
    <br>
    <b>Define el array $orden de la siguiente manera: $orden = ["primer", "segundo", "tercer", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno", "décimo", "undécimo", "duodécimo", "decimotercero",];
    </b><br>
    <?php
    $orden = ["primer", "segundo", "tercer", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno", "décimo", "undécimo", "duodécimo", "decimotercero"];
    print_r($orden);
    ?>

    <br>
    <b> En una página HTML, realiza un código PHP cuya ejecución cree, partiendo de los arrays anteriores, un array denominado $ordenDias con los siguientes valores: "primer"=>"lunes", "segundo"=>"martes", ..., "sexto"=>"sábado", "séptimo"=>"domingo"</b> <br>

    <?php
    for ($i = 0; $i < sizeof($diasSemana); $i++) {
        $ordenDias = array($orden[$i] => $diasSemana[$i]);
        print_r($ordenDias);
    }
    ?>
    <br>
    <b>Y a continuación recorre $ordenDias y muestra un informe como el siguiente: El Lunes, es el primer día de la semana; el Martes, es el segundo día de la semana; ...; el Domingo, es el séptimo día de la semana</b><br>
    <?php


    ?>
</p>

</html>