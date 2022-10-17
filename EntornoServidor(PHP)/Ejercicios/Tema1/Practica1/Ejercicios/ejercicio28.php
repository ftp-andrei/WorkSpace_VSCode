<?php
$peliculas = [
    'enero' => [
        25 => [
            'La vida de Brian',
            'El discreto encanto de la burguesía',
        ],
        28 => [
            'Los caballeros de la mesa cuadrada',
            'El ángel exterminador',
        ],
    ],
    'marzo' => [
        3 => [
            'El sentido de la vida',
            'El desprecio',
        ],
        4 => [
            'Al final de la escapada',
            'Marnie, la ladrona'
        ],
        18 => [
            'Topaz',
            'Bienvenido Mister Marshall',
            'Una banda aparte',
        ],
        25 => ['El verdugo'],
        26 => [
            'Calabuch',
            'Vértigo',
        ],
    ],
    'abril' => [
        1 => ['Pierrot el loco',],
    ],
];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 28</title>
</head>

<body>
    <p><b>Agrega, mediante código de ejecución (no de inicialización de array), que el mes de febrero vistes las películas: La muerte en directo y La hija de d’Artagnan el día 2. Y el día 8 Capitán Conan. <br> Vuelve a mostrar las películas como en el ejercicio 27 anterior. ¿En qué orden se muestran? ¿Cómo puedes ordenar el array? </b> <br>


        <?php

        $array = array('febrero' => [
            2 => [
                'La muerte en directo',
                'La hija de d’Artagnan',
            ],
            8 => [
                'Capitán Conan'
            ]
        ],);
        $resultado = array_merge($array, $peliculas);
        ksort($resultado);
        foreach ($resultado as $mes => $dia) {
            foreach ($resultado[$mes] as $dia => $arrayPeliculas) {
                if (sizeOf($arrayPeliculas) > 1) {
                    echo "<br>En $mes, el dia $dia vi las peliculas: " . implode(", ", $arrayPeliculas);
                } else {
                    echo "<br>En $mes, el dia $dia vi la pelicula: " . implode(", ", $arrayPeliculas);
                }
            }
        }
        echo "<br><br>Se muestra desordenado. Se ordena con ksort"
        ?>
</body>

</html>