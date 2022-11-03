<?php
function mostrarAgenda($param)
{
    echo <<< end
    <table>
    <caption>Contactos</caption>
    <thead>
        <tr>
            <th scope="col" id="ciudad">Ciudad</th>
            <th scope="col" id="nombre">Nombre</th>
            <th scope="col" id="apellidos">Apellidos</th>
            <th scope="col" id="fnac">Fecha de nacimiento</th>
            <th scope="col" id="tlfno">Teléfono</th>
            <th scope="col" id="email">Email</th>
        </tr>
    </thead>
    <tbody>
    end;
    foreach ($param as $nombreapell => $contacto) {
        echo "
        <tr>
            <td>" . $contacto['ciudad'] . "</td>
            <td>" . $contacto['nombre'] . "</td>
            <td>" . $contacto['apellidos'] . "</td>
            <td>" . $contacto['fnac'] . "</td>
            <td>" . $contacto['tlfno'] . "</td>
            <td>" . $contacto['mail'] . "</td>
        </tr>";
    }

    echo "
    </tbody>
</table> ";
}

function eliminar($nombre, $apellidos, $agenda)
{
    $nombreCompleto = htmlspecialchars($nombre . " " . $apellidos);
    unset($agenda[$nombreCompleto]);
    file_put_contents('agenda.txt', serialize($agenda));
    echo "¡Persona eliminada! <br>";
    mostrarAgenda($agenda);
}

function aniadir($tfno, $eCorreo, $nombre, $apellidos, $ciudad, $fNac)
{

    if (empty($nombre) || empty($apellidos) || empty($ciudad) || empty($fNac)) {
        echo '<div class="error">';
        echo "<p>Faltan datos esenciales</p>";
        echo '</div>';
        exit;
    }

    if (empty($tfno)  && $eCorreo == '') { // Solo el tlfno o el eCorreo pueden quedar vacíos, pero no los dos a la vez. 
        echo '<div class="error">';
        echo "El campo Teléfono ($tfno) y el campo Correo electrónico ($eCorreo) están vacíos <br>";
        echo '</div>';
        exit;
    }

    if (strlen($nombre) < 2) { // El nombre debe tener 2 caracteres mínimo.
        echo '<div class="error">';
        echo "EL nombre introducido ($nombre) es demasiado corto <br>";
        echo '</div>';
        exit;
    }

    if (strlen($apellidos) < 2) { // El apellido debe tener dos caracteres mínimo.
        echo '<div class="error">';
        echo "Los apellidos introducidos ($apellidos) son demasiado cortos <br>";
        echo '</div>';
        exit;
    }

    $agenda = unserialize(file_get_contents("agenda.txt")); //cogemos todo lo que hay en agenda.txt

    if (isset($agenda[$nombre . " " . $apellidos])) { // El contacto $nombre $apellidos ya existe
        return false;
    } else {
        $contactoNuevo = ['ciudad' => $ciudad, 'nombre' => $nombre, 'apellidos' => $apellidos, 'fnac' => $fNac, 'tlfno' => $tfno, 'mail' => $eCorreo]; //Nuevo contacto

        $agenda[$contactoNuevo['nombre'] . " " . $contactoNuevo['apellidos']] = $contactoNuevo; // Añade contacto al array de agenda
        file_put_contents("agenda.txt", serialize($agenda)); //Escribir el nuevo contacto en agenda.txt

        mostrarAgenda($agenda);
        return true;
    }
}

function modificar($tfno, $eCorreo, $nombre, $apellidos, $ciudad, $fNac)
{
    if (empty($nombre) || empty($apellidos) || empty($ciudad) || empty($fNac)) {
        echo '<div class="error">';
        echo "<p>Faltan datos esenciales</p>";
        echo '</div>';
        exit;
    }

    if (empty($tfno)  && $eCorreo == '') { // Solo el tlfno o el eCorreo pueden quedar vacíos, pero no los dos a la vez. 
        echo '<div class="error">';
        echo "El campo Teléfono ($tfno) y el campo Correo electrónico ($eCorreo) están vacíos <br>";
        echo '</div>';
        exit;
    }

    if (strlen($nombre) < 2) { // El nombre debe tener 2 caracteres mínimo.
        echo '<div class="error">';
        echo "EL nombre introducido ($nombre) es demasiado corto <br>";
        echo '</div>';
        exit;
    }

    if (strlen($apellidos) < 2) { // El apellido debe tener dos caracteres mínimo.
        echo '<div class="error">';
        echo "Los apellidos introducidos ($apellidos) son demasiado cortos <br>";
        echo '</div>';
        exit;
    }

    $agenda = unserialize(file_get_contents("agenda.txt")); //cogemos todo lo que hay en agenda.txt
    $contactoNuevo = ['ciudad' => $ciudad, 'nombre' => $nombre, 'apellidos' => $apellidos, 'fnac' => $fNac, 'tlfno' => $tfno, 'mail' => $eCorreo]; //Nuevo contacto
    $agenda[$contactoNuevo['nombre'] . " " . $contactoNuevo['apellidos']] = $contactoNuevo; // Añade contacto al array de agenda
    file_put_contents("agenda.txt", serialize($agenda)); //Escribir el nuevo contacto en agenda.txt
    mostrarAgenda($agenda);
}

function consultarContacto($nombreCompleto, $ciudad, $agenda)
{
    $resultado = [];
    if (!empty($ciudad)) {
        foreach ($agenda as $contacto) {
            if ($contacto['ciudad'] === $ciudad) {
                $resultado[] = $contacto;
            }
        }
        mostrarAgenda($resultado);
    } elseif ($nombreCompleto !== ' ') {
        foreach ($agenda as $contacto) {
            if ($contacto['nombre'] . " " . $contacto['apellidos'] === $nombreCompleto) {
                $resultado[] = $contacto;
            }
        }
        
        mostrarAgenda($resultado);
    } else {
        echo "Debes introducir un nombre o ciudad!";
    }
}
