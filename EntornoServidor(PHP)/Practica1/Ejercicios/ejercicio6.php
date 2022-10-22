<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>

<body>
    <p>
        Ya sabes cómo se separan las sentencias en PHP. Investiga si en PHP es obligatorio incluir siempre el carácter de separación de sentencias y cuáles son sus ventajas e inconvenientes. Pon a prueba lo aprendido aplicándolo en los Ejercicios 2 y 3<br><br>

        En el primero si hace falta cierre ya que está dentro del body, si no se pone cierre daría error. En cambio, en el segundo no hace falta cierre ya que no hay nada que lo recubra. Si fuese solo php, el propio editor te eliminaría la etiqueta de cierre.
    </p>

    <?php
    echo "1- Si hay cierre <br>";
    ?>

</body>

</html>

<?php
echo "2- No hay cierre";
