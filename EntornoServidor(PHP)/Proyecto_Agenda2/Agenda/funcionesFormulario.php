<?php
function mostrarAgenda($param)
{
    echo <<< end
    <table>
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

function aniadir($tfno, $eCorreo, $nombre, $apellidos, $ciudad, $fNac, $fileAgenda)
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

    $agenda = unserialize(file_get_contents("$fileAgenda")); //cogemos todo lo que hay en agenda.txt

    if (isset($agenda[$nombre . " " . $apellidos])) { // El contacto $nombre $apellidos ya existe
        return false;
    } else {
        $contactoNuevo = ['ciudad' => $ciudad, 'nombre' => $nombre, 'apellidos' => $apellidos, 'fnac' => $fNac, 'tlfno' => $tfno, 'mail' => $eCorreo]; //Nuevo contacto

        $agenda[$contactoNuevo['nombre'] . " " . $contactoNuevo['apellidos']] = $contactoNuevo; // Añade contacto al array de agenda
        file_put_contents("$fileAgenda", serialize($agenda)); //Escribir el nuevo contacto en agenda.txt

        mostrarAgenda($agenda);
        return true;
    }
}

function modificar($tfno, $eCorreo, $nombre, $apellidos, $ciudad, $fNac, $fileAgenda)
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

    $agenda = unserialize(file_get_contents("$fileAgenda")); //cogemos todo lo que hay en agenda.txt
    $contactoNuevo = ['ciudad' => $ciudad, 'nombre' => $nombre, 'apellidos' => $apellidos, 'fnac' => $fNac, 'tlfno' => $tfno, 'mail' => $eCorreo]; //Nuevo contacto
    $agenda[$contactoNuevo['nombre'] . " " . $contactoNuevo['apellidos']] = $contactoNuevo; // Añade contacto al array de agenda
    file_put_contents("$fileAgenda", serialize($agenda)); //Escribir el nuevo contacto en agenda.txt
    mostrarAgenda($agenda);
}

function consultarContacto($nombre, $apellidos, $ciudad, $agenda)
{
    $nombreCompleto = $nombre . ' ' . $apellidos;
    $resultado = [];

    if (!empty($nombre) && !empty($apellidos)) {
        foreach ($agenda as $contacto) {
            if ($contacto['nombre'] . " " . $contacto['apellidos'] === $nombreCompleto) {
                $resultado[] = $contacto;
                break;
            }
        }
        mostrarAgenda($resultado);
    } elseif (!empty($nombre) && empty($apellidos) && !empty($ciudad)) {
        foreach ($agenda as $contacto) {
            if ($contacto['nombre'] === $nombre && $contacto['ciudad'] === $ciudad) {
                $resultado[] = $contacto;
            }
        }
        mostrarAgenda($resultado);
    } elseif (!empty($nombre) && empty($apellidos) && empty($ciudad)) {
        foreach ($agenda as $contacto) {
            if ($contacto['nombre'] === $nombre) {
                $resultado[] = $contacto;
            }
        }
        mostrarAgenda($resultado);
    } elseif (empty($nombre) && !empty($apellidos) && !empty($ciudad)) {
        foreach ($agenda as $contacto) {
            if ($contacto['apellidos'] === $apellidos && $contacto['ciudad'] === $ciudad) {
                $resultado[] = $contacto;
            }
        }
        mostrarAgenda($resultado);
    } elseif (empty($nombre) && !empty($apellidos)) {
        foreach ($agenda as $contacto) {
            if ($contacto['apellidos'] === $apellidos) {
                $resultado[] = $contacto;
            }
        }
        mostrarAgenda($resultado);
    } elseif (!empty($ciudad)) {
        foreach ($agenda as $contacto) {
            if ($contacto['ciudad'] === $ciudad) {
                $resultado[] = $contacto;
            }
        }
        mostrarAgenda($resultado);
    } else {
        echo "¡Debes introducir un nombre o ciudad!";
    }
}


function selectComunidades()
{
    $comunidades = [
        '', 'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Murcia', 'Palma de Mayorca', 'Las Palma', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vitoria', 'La Coruña',
        'Granada', 'Oviedo', 'Santa Cruz', 'Pamplona', 'Almería', 'San Sebastian', 'Burgos', 'Albacete', 'Santander', 'Castellón', 'Logroño', 'Badajoz', 'Salamanca', 'Huelva', 'Lérida',
        'Tarragona', 'León', 'Cádiz', 'Jaén', 'Orense', 'Gerona', 'Lugo', 'Cáceres', 'Melilla', 'Guadalajara', 'Toledo', 'Ceuta', 'Pontevedra', 'Palencia', 'Ciudad Real', 'Zamora', 'Ávila',
        'Cuenca', 'Huesca', 'Segovia', 'Soria', 'Teruel',
    ];
    echo '
        <select class="form-control" name="ciudad" id="ciudad">';
    foreach ($comunidades as $value) {
        echo '<option value="';
        echo $value . '">' . $value . "</option>";
    }
    echo "</select>";
}

function aniadirUsuario($email, $pass, $username, $userSurname, $nickname, $address, $phoneNumber): bool
{
    if (empty($email) || empty($pass) || empty($nickname)) {
        echo '<div class="error">';
        echo "<p>Faltan datos esenciales</p>";
        echo '</div>';
        exit;
    }

    if (strlen($nickname) < 2) {
        echo '<div class="error">';
        echo "El nickname introducido ($nickname) es demasiado corto <br>";
        echo '</div>';
        exit;
    }

    if (!preg_match(
        '/^[a-zA-Z0-9_.+-ñÑ]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/',
        $email
    )) {
        echo '<div class="error">';
        echo "<span style='color:red'> El mail introducido no tiene un formato válido.</span><br>";
        echo '</div>';
        exit;
    }


    $users = unserialize(file_get_contents("users.txt"));

    if (isset($users[$email])) {
        echo "<span style='color:red'>El correo introducido ya existe.<br></span>";
        return false;
    } else {
        $newUser = ['username' => '', 'pass' => $pass, 'userSurname' => '', 'nickname' => $nickname, 'address' => '', 'phoneNumber' => '', 'role' => 'role_user'];

        $users[$email] = $newUser;
        file_put_contents("users.txt", serialize($users));
        file_put_contents('users/' . $email . '.txt', '');
        header('Location: ./login.php');
        return true;
    }
}

function closeSession()
{
    session_unset();
    session_destroy();
    header("Location: login.php");
}
