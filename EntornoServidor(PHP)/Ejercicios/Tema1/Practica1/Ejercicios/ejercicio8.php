<?php
// 2-Poniendo todo en una sola variable
$nombreVariable = "2- Mi nombre es Andrei y estudio DAW2 <br>";

// 3- Concatenando variables
$nombre = "Andrei";
$estudios = "DAW2";
$resultado = "3- Mi nombre es " . $nombre . " y estudio " . $estudios;
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8</title>
</head>

<body>
    <p>Investiga qué son las directivas PHP y dónde se pueden definir y/o modificar. Aprovechando los posibles errores que hayas obtenido en Ejercicio 7, modifica el ejercicio para incluir la directiva error_reporting asignándole diferentes valores cada vez, provoca que se produzcan errores y observa en la ventana del navegador los resultados obtenidos en función del valor asignado a la directiva error_reporting <br><br>
        Son configuraciones que hacen que puedas modificar la configuracion del PHP (php.ini).
        Todo lo que se puede definir y/o modificar lo puedes encontrar <a href="https://www.php.net/manual/en/ini.list.php" target="_blank">aquí</a>.

        Las directivas error_reporting se cambian en php.ini <br>
        PHP_INI_ALL significa que se pueden cambiar mientras se ejecuta <br>
    </p>

    <?php
    //Ejemplos error_reporting()
    // Desactivar todos los informes de errores
    error_reporting(0);

    // Informar errores simples de ejecución
    error_reporting(E_ERROR | E_WARNING | E_PARSE);

    // Informar E_NOTICE también puede ser bueno (para informar no inicializado
    // variables o captar faltas de ortografía en el nombre de la variable...)
    error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

    // Informar de todos los errores excepto E_NOTICE
    error_reporting(E_ALL & ~E_NOTICE);

    // Reportar todos los errores de PHP
    error_reporting(E_ALL);

    // Reportar todos los errores de PHP
    error_reporting(-1);

    // Igual que error_reporting(E_ALL);
    ini_set('error_reporting', E_ALL);


    // 1- Sin variables
    echo "1- Mi nombre es Andrei y estudio DAW2 <br>" . $nombreVariable . $resultado;
    ?>
</body>

</html>