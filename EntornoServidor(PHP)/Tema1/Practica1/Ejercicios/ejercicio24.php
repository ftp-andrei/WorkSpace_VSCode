<?php
$diasSemana = [
    "lunes",
    "martes",
    "1" => "miércoles",
    1.7 => "jueves",
    "01" => "viernes",
    true => "sábado",
    "domingo",
];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 24</title>
</head>

<body>
    <p><b>
            Continúa la investigación sobre los arrays. Los arrays pueden tener muchas dimensiones (claves o índices diferentes), entre diferentes dimensiones del array ¿tienen que ser todas las claves del array del mismo tipo? ¿Y dentro de la misma dimensión? ¿PHP realiza alguna conversión de tipo implícita según cómo se especifique el valor de la clave? ¿Qué sucede cuando en la definición del array, por la razón que sea, se especifica el mismo valor de clave más de una vez? </b><br>
        No hace falta que sean del mismo tipo.
        No hace falta tampoco dentro de la misma dimension.

        <br>
        <b> Define el array $diasSemana de la siguiente manera: <br>
            $diasSemana = ["lunes",<br>
            "martes",<br>
            "1"=>"miércoles",<br>
            1.7=>"jueves",<br>
            "01"=>"viernes",<br>
            True=>"sábado",<br>
            "domingo",];<br>
            <br>
            Responde, ¿es sintácticamente correcta la definición anterior?</b><br>
        Si ya que no hace falta que las claves sean del mismo tipo. <br>


        <b>Si has respondido sí a la pregunta anterior, ahora responde, ¿qué contiene realmente el array? Si realizo un recorrido del mismo ¿qué se mostrará realmente?</b> <br>
        Las claves y el valor.

        <br>
        <b>En una página HTML, crea el código PHP necesario para definir y recorrer el array y mostrar su contenido (claves y elementos). Reflexiona sobre el resultado y obtén las conclusiones adecuadas. Si el resultado no coincide con lo las respuestas que has dado, vuelve a la documentación de PHP y repasa lo investigado sobre arrays y sus claves.</b> <br>
        <?php
        print_r($diasSemana);
        ?>
    </p>
</body>

</html>