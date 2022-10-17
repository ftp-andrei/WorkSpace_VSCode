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
    <title>Ejercicio 27</title>

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
    <p><b>El array mantiene las películas que un usuario ha visto en determinados días de determinados meses.Recorre el array y muestra en una tabla HTML las películas que ha visto el usuario.</b> <br>
    <table>
        <thead>
            <td><strong>Mes</strong></td>
            <td><strong>Días</strong></td>
            <td><strong>Pelicula</strong></td>
        </thead>
        <?php
        foreach ($peliculas as $mes => $dia) {
            foreach ($peliculas[$mes] as $dia => $peliculasArray) {
                foreach ($peliculas[$mes][$dia] as $peliculasArray => $dia3) {
                    echo "<tr>
        <td>$mes</td>
        <td>$dia</td>
        <td> $dia3</td>
        </tr>";
                }
            }
        }
        ?>
    </table>

    <br>
    <b>Vuelve a recorrer el array, pero ahora el informe debe ser:
        En enero, el día 25 vi las películas: La vida de Brian y El discreto encanto de la burguesía.
        ...
        En abril, el día 1 vi la película Pierrot el loco.</b> <br>
    <?php
    foreach ($peliculas as $mes => $dia) {
        foreach ($peliculas[$mes] as $dia => $peliculasArray) {
            if (sizeOf($peliculasArray) > 1) {
                echo "<br>En $mes, el dia $dia vi las peliculas: " . implode(", ", $peliculasArray);
            } else {
                echo "<br>En $mes, el dia $dia vi la pelicula: " . implode(", ", $peliculasArray);
            }
        }
    }
    ?>
    </p>
</body>

</html>