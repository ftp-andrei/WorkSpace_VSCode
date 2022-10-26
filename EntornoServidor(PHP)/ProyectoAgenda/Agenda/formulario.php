<?php
$contacto1 = [
    'ciudad' => 'Madrid',
    'nombre' => 'Pedro Juan',
    'apellidos' =>  'Gil',
    'fnac' => '1990-05-02',
    'tlfno' => '91-956.34.46',
    'mail' => 'psanzg@gmail.com',
];

$contacto2 = [
    'ciudad' => 'Madrid',
    'nombre' => 'Juana',
    'apellidos' => 'Pérez Ruiz',
    'fnac' => '1992-01-17',
    'tlfno' => '91-725.72.16',
    'mail' => 'jperezr@gmail.com',
];
$contacto3 = [
    'ciudad' => 'Barcelona',
    'nombre' => 'María',
    'apellidos' => 'Gal Sáinz',
    'fnac' => '1985-10-25',
    'tlfno' => '',
    'mail' => 'mgals@gmail.com.com',
];
$contacto4 = [
    'ciudad' => 'Barcelona',
    'nombre' => 'Ana Ramos',
    'apellidos' => 'Martínez',
    'fnac' => '1995-9-10',
    'tlfno' => '93-625.26.35',
    'mail' => 'mgals@gmail.com',
];

$contacto5 = [
    'ciudad' => 'Toledo',
    'nombre' => 'Sonia',
    'apellidos' => 'Pérez Estrada',
    'fnac' => '1980-03-22',
    'tlfno' => '925-79.25.15',
    'mail' => 'spereze@gmail.com',
];
$contacto6 = [
    'ciudad' => 'Toledo',
    'nombre' => 'Susana',
    'apellidos' => 'Giménez Marcos',
    'fnac' => '1988-01-31',
    'tlfno' => '925-49.17.65',
    'mail' => 'sgimenezm@gmail.com',
];

$agenda = [
    $contacto1['nombre'] . ' ' . $contacto1['apellidos']  => $contacto1, $contacto2['nombre'] . ' ' . $contacto2['apellidos'] => $contacto2,
    $contacto3['nombre'] . ' ' . $contacto3['apellidos']  => $contacto3, $contacto4['nombre'] . ' ' . $contacto4['apellidos'] => $contacto4,
    $contacto5['nombre'] . ' ' . $contacto5['apellidos']  => $contacto5, $contacto6['nombre'] . ' ' . $contacto6['apellidos'] => $contacto6,
]
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario agenda</title>
</head>

<body>

    <!-- Alex -->
    <form action="consultarContacto.php">

    </form>
    <!-- Extremiana -->
    <form action="aniadirContacto.php">

    </form>
    <!-- Álvaro -->
    <form action="modificarContacto.php">

    </form>
    <!-- Andrei -->
    <?php
    serialize($agenda);
    file_put_contents(agenda . txt);
    ?>
    <h1>Eliminar</h1>
    <form action="eliminarContacto.php" method="POST">
        <input type="text" placeholder="Tu nombre" name="nombre" required>
        <input type="text" placeholder="Tus Apellidos" name="apellidos" required>
        <br>
        <button type="submit">Enviar</button>
        /*
        file get content
        array unserialize
        unset(array(nombre))
        serialize
        put content (agenda.txt)
        */
    </form>
</body>

</html>