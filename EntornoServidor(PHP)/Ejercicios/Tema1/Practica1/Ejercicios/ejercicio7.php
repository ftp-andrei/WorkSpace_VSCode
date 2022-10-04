<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 7</title>
</head>

<body>
    <p>
        Modifica el ejercicio 2 e imitando el ejercicio 1 en el que se definen variables, experimenta a situar código en diferentes partes de la página HTML y observa el resultado. Si obtienes algún error o los resultados no son los esperados, intenta comprender qué es lo que lo causa, saca consecuencias y corrígelo <br><br>

        No me han dado errores, los he puesto en todos los lados. El unico error que encontré fue al ponerlo entre la etiqueta html y el head, causando asi un error al encontrar la variable (ya que uno depende del otro), o cambiando los php de posicion entre ellos 2.
    </p>


</body>
<?php
// 2-Poniendo todo en una sola variable
$nombreVariable = "2- Mi nombre es Andrei y estudio DAW2 <br>";

// 3- Concatenando variables
$nombre = "Andrei";
$estudios = "DAW2";
$resultado = "3- Mi nombre es " . $nombre . " y estudio " . $estudios;
?>

</html>

<?php
// 1- Sin variables
echo "1- Mi nombre es Andrei y estudio DAW2 <br>" . $nombreVariable . $resultado;
?>