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
    <p><b>Emplea el código del ejercicio 27 para mostrar su contenido. ¿Funciona ahora? </b><br>
        No funciona. foreach() argument must be of type array|object, int given<br>
        <b>Adapta el código para mostrar el siguiente informe:
            En enero, el día 25 vi las películas: La vida de Brian y El discreto encanto de la burguesía.
            En febrero no vi ninguna película.
            ...
            En mayo, el día 1 vi la película Pierrot el loco. </b>

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