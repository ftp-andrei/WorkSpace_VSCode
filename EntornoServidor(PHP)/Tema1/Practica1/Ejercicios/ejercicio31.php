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
    'febrero' => 0,
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
    'abril' => 0,
    'mayo' => [
        1 => ['Pierrot el loco',],
    ],
];

$peliculas['febrero'] =  [
    2 => [
        'La muerte en directo',
        'La hija de d’Artagnan',
    ],
    8 => [
        'Capitán Conan'
    ]
];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 30</title>
</head>

<body>
    <p><b>Añadir peliculas a febrero (sin merge)</b>

        <?php
        foreach ($peliculas as $mes => $dia) {
            if (is_array($dia)) {
                foreach ($peliculas[$mes] as $dia => $arrayPeliculas) {
                    if (sizeOf($arrayPeliculas) > 1) {
                        echo "<br>En $mes, el dia $dia vi las peliculas: " . implode(", ", $arrayPeliculas);
                    } else {
                        echo "<br>En $mes, el dia $dia vi la pelicula: " . implode(", ", $arrayPeliculas);
                    }
                }
            } else {
                echo "<br>En $mes, no vi ninguna película";
            }
        }
        ?>
    </p>
</body>

</html>