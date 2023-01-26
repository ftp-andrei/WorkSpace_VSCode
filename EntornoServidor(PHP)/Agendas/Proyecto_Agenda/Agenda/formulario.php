<?php
include 'funcionesFormulario.php';
$fileAgenda = 'agenda.txt';
$agenda = unserialize(file_get_contents($fileAgenda));

// file_put_contents($fileAgenda, serialize($agenda));
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda</title>
    <style>
        table,
        td,
        th {
            border: 1px solid black;
            border-collapse: collapse;
        }

        td,
        th {
            padding: 0.2em;
        }
    </style>
</head>

<body>
    <h1>Agenda Scrum</h1>
    <!-- Alex -->
    <form action="" method="POST">
        <fieldset>
            <legend>Buscar contacto</legend>
            <p>
                <label>Nombre
                    <input type="text" name="nombre" placeholder="Nombre" value=""></label>
                <label>Apellidos
                    <input type="text" name="apellidos" placeholder="Apellidos" value=""></label>
            </p>
            <p>
                <label for="ciudad">Ciudad</label>
                <select name="ciudad" id="ciudad">
                    <!-- La ciudad debe ser una de las capitales de provincia actuales. -->
                    <option value="">-----------</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Valencia">Valencia </option>
                    <option value="Sevilla">Sevilla </option>
                    <option value="Zaragoza ">Zaragoza </option>
                    <option value="Málaga">Málaga </option>
                    <option value="Murcia">Murcia </option>
                    <option value="Palma de Mayorca">Palma de Mayorca</option>
                    <option value="Las Palmas">Las Palmas</option>
                    <option value="Bilbao">Bilbao </option>
                    <option value="Alicante">Alicante </option>
                    <option value="Córdoba">Córdoba </option>
                    <option value="Valladolid">Valladolid</option>
                    <option value="Vitoria">Vitoria </option>
                    <option value="La Coruña">La Coruña</option>
                    <option value="Granada">Granada </option>
                    <option value="Oviedo">Oviedo </option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Pamplona">Pamplona </option>
                    <option value="Almería">Almería </option>
                    <option value="San Sebastian">San Sebastian</option>
                    <option value="Burgos">Burgos </option>
                    <option value="Albacete">Albacete </option>
                    <option value="Santander">Santander</option>
                    <option value="Castellón">Castellón</option>
                    <option value="Logroño">Logroño </option>
                    <option value="Badajoz">Badajoz </option>
                    <option value="Salamanca">Salamanca</option>
                    <option value="Huelva">Huelva </option>
                    <option value="Lérida">Lérida </option>
                    <option value="Tarragona">Tarragona</option>
                    <option value="León">León </option>
                    <option value="Cádiz">Cádiz </option>
                    <option value="Jaén">Jaén </option>
                    <option value="Orense">Orense </option>
                    <option value="Gerona">Gerona </option>
                    <option value="Lugo">Lugo </option>
                    <option value="Cáceres">Cáceres </option>
                    <option value="Melilla">Melilla </option>
                    <option value="Guadalajara">Guadalajara</option>
                    <option value="Toledo">Toledo </option>
                    <option value="Ceuta">Ceuta </option>
                    <option value="Pontevedra">Pontevedra</option>
                    <option value="Palencia ">Palencia </option>
                    <option value="Ciudad Real">Ciudad Real</option>
                    <option value="Zamora ">Zamora </option>
                    <option value="Ávila ">Ávila </option>
                    <option value="Cuenca">Cuenca</option>
                    <option value="Huesca">Huesca</option>
                    <option value="Segovia ">Segovia </option>
                    <option value="Soria ">Soria </option>
                    <option value="Teruel">Teruel</option>
                </select>
            </p>
            <button type="submit" name="consultarOK">Consultar Contacto</button>
        </fieldset>
    </form>
    <!-- Extremiana -->
    <form action="" method="post" id="camposFormulario">
        <fieldset>
            <legend>Añadir contacto</legend>
            <ul>
                <li>
                    <label>Nombre:
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" value=""></label>
                </li>

                <li>
                    <label>Apellidos:
                        <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" value="">
                    </label>
                </li>

                <li>
                    <label>Fecha de nacimiento:
                        <input type="date" id="fNac" name="fNac" placeholder="Fecha de nacimiento" value="">
                    </label>
                </li>

                <li>
                    <p>Ciudad:
                        <select name="ciudad" id="ciudad">
                            <!-- La ciudad debe ser una de las capitales de provincia actuales. -->
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Valencia">Valencia </option>
                            <option value="Sevilla">Sevilla </option>
                            <option value="Zaragoza ">Zaragoza </option>
                            <option value="Málaga">Málaga </option>
                            <option value="Murcia">Murcia </option>
                            <option value="Palma de Mayorca">Palma de Mayorca</option>
                            <option value="Las Palmas">Las Palmas</option>
                            <option value="Bilbao">Bilbao </option>
                            <option value="Alicante">Alicante </option>
                            <option value="Córdoba">Córdoba </option>
                            <option value="Valladolid">Valladolid</option>
                            <option value="Vitoria">Vitoria </option>
                            <option value="La Coruña">La Coruña</option>
                            <option value="Granada">Granada </option>
                            <option value="Oviedo">Oviedo </option>
                            <option value="Santa Cruz">Santa Cruz</option>
                            <option value="Pamplona">Pamplona </option>
                            <option value="Almería">Almería </option>
                            <option value="San Sebastian">San Sebastian</option>
                            <option value="Burgos">Burgos </option>
                            <option value="Albacete">Albacete </option>
                            <option value="Santander">Santander</option>
                            <option value="Castellón">Castellón</option>
                            <option value="Logroño">Logroño </option>
                            <option value="Badajoz">Badajoz </option>
                            <option value="Salamanca">Salamanca</option>
                            <option value="Huelva">Huelva </option>
                            <option value="Lérida">Lérida </option>
                            <option value="Tarragona">Tarragona</option>
                            <option value="León">León </option>
                            <option value="Cádiz">Cádiz </option>
                            <option value="Jaén">Jaén </option>
                            <option value="Orense">Orense </option>
                            <option value="Gerona">Gerona </option>
                            <option value="Lugo">Lugo </option>
                            <option value="Cáceres">Cáceres </option>
                            <option value="Melilla">Melilla </option>
                            <option value="Guadalajara">Guadalajara</option>
                            <option value="Toledo">Toledo </option>
                            <option value="Ceuta">Ceuta </option>
                            <option value="Pontevedra">Pontevedra</option>
                            <option value="Palencia ">Palencia </option>
                            <option value="Ciudad Real">Ciudad Real</option>
                            <option value="Zamora ">Zamora </option>
                            <option value="Ávila ">Ávila </option>
                            <option value="Cuenca">Cuenca</option>
                            <option value="Huesca">Huesca</option>
                            <option value="Segovia ">Segovia </option>
                            <option value="Soria ">Soria </option>
                            <option value="Teruel">Teruel</option>
                        </select>
                    </p>
                </li>

                <li>
                    <label>Correo electrónico:
                        <!-- El eCorreo tiene que ser un formato válido según el estándar -->
                        <input type="email" id="eCorreo" name="eCorreo" placeholder="Correo electrónico válido" value="">
                    </label>
                </li>

                <li>
                    <label>Teléfono:
                        <!--El tlfno debe tener un formato de prefijo xx-xxx.xx.xx o xxx-xx.xx.xx. -->
                        <!-- pattern="\([0-9]{2}\) [-] [0-9]{3} [.] [0-9]{2} [.] [0-9]{2} [.] [0-9]{2}" -->
                        <input type="tel" id="tlfno" name="tlfno" placeholder="Teléfono" value="">
                    </label>
                </li>
            </ul>
            <?= isset($aniadidoBien) ? '<span class="aniadido">' . $aniadidoBien . '</span>' : ''; ?>
            <?= isset($errorAniadido) ? '<span class="error" style="color:red">' . $errorAniadido . '</span>' : ''; ?>
            <button type="submit" name="aniadirOK"> Enviar </button>
            <button type="reset"> Reset </button>
        </fieldset>
    </form>
    <!-- Álvaro -->
    <form action="" method="POST">
        <fieldset>
            <legend>Modificar contacto</legend>
            <label>Nombre del contacto a modificar(*): <input type="text" name="nombreMod" placeholder="Nombre" value=""></label>
            <label>Apellidos del contacto a modificar(*): <input type="text" name="apellidosMod" placeholder="Apellidos" value=""></label>
            <label>Fecha de nacimiento: <input type="date" name="fnacMod" value=""></label>
            <label>Número de teléfono: <input type="tel" name="tlfnoMod" value="" placeholder="El número nuevo"></label>
            <label>Email: <input type="email" name="mailMod" value="" placeholder="El nuevo email"></label>
            <select name="ciudadMod" id="ciudad">
                <!-- La ciudad debe ser una de las capitales de provincia actuales. -->
                <option value="">-----------</option>
                <option value="Madrid">Madrid</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Valencia">Valencia </option>
                <option value="Sevilla">Sevilla </option>
                <option value="Zaragoza ">Zaragoza </option>
                <option value="Málaga">Málaga </option>
                <option value="Murcia">Murcia </option>
                <option value="Palma de Mayorca">Palma de Mayorca</option>
                <option value="Las Palmas">Las Palmas</option>
                <option value="Bilbao">Bilbao </option>
                <option value="Alicante">Alicante </option>
                <option value="Córdoba">Córdoba </option>
                <option value="Valladolid">Valladolid</option>
                <option value="Vitoria">Vitoria </option>
                <option value="La Coruña">La Coruña</option>
                <option value="Granada">Granada </option>
                <option value="Oviedo">Oviedo </option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Pamplona">Pamplona </option>
                <option value="Almería">Almería </option>
                <option value="San Sebastian">San Sebastian</option>
                <option value="Burgos">Burgos </option>
                <option value="Albacete">Albacete </option>
                <option value="Santander">Santander</option>
                <option value="Castellón">Castellón</option>
                <option value="Logroño">Logroño </option>
                <option value="Badajoz">Badajoz </option>
                <option value="Salamanca">Salamanca</option>
                <option value="Huelva">Huelva </option>
                <option value="Lérida">Lérida </option>
                <option value="Tarragona">Tarragona</option>
                <option value="León">León </option>
                <option value="Cádiz">Cádiz </option>
                <option value="Jaén">Jaén </option>
                <option value="Orense">Orense </option>
                <option value="Gerona">Gerona </option>
                <option value="Lugo">Lugo </option>
                <option value="Cáceres">Cáceres </option>
                <option value="Melilla">Melilla </option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Toledo">Toledo </option>
                <option value="Ceuta">Ceuta </option>
                <option value="Pontevedra">Pontevedra</option>
                <option value="Palencia ">Palencia </option>
                <option value="Ciudad Real">Ciudad Real</option>
                <option value="Zamora ">Zamora </option>
                <option value="Ávila ">Ávila </option>
                <option value="Cuenca">Cuenca</option>
                <option value="Huesca">Huesca</option>
                <option value="Segovia ">Segovia </option>
                <option value="Soria ">Soria </option>
                <option value="Teruel">Teruel</option>
            </select>
            <?= isset($errorMod) ? '<span class="error" style="color:red">' . $errorMod . '</span>' : ''; ?>
            <button type="submit" name="okMod">Modificar</button>
        </fieldset>
    </form>
    <!-- Andrei -->
    <form action="" method="POST">
        <fieldset>
            <legend>Eliminar contacto</legend>
            <label>Nombre: <input type="text" placeholder="Tu nombre" name="nombre"></label>
            <label>Apellidos: <input type="text" placeholder="Tus Apellidos" name="apellidos"></label>
            <?= isset($errorDel) ? '<span class="error" style="color:red">' . $error . '</span>' : ''; ?>
            <br>
            <button type="submit" name="okDel">Enviar</button>
        </fieldset>
    </form>

    <?php
    /* Consultar */
    if (isset($_POST['consultarOK']))
        consultarContacto($_POST['nombre'] . " " . $_POST['apellidos'], $_POST['ciudad'], $agenda);

    /* Aniadir */
    if (isset($_POST['aniadirOK'])) {
        if (aniadir($_POST["tlfno"], $_POST["eCorreo"], $_POST["nombre"], $_POST["apellidos"], $_POST["ciudad"], $_POST["fNac"])) {
            $aniadidoBien = 'Contacto aniadido correctamente';
        } else {
            $errorAniadido = 'Contacto repetido';
        }
    }

    /* Eliminar */
    if (isset($_POST['okDel'])) {
        $nombre = htmlspecialchars($_POST["nombre"]);
        $apellidos = htmlspecialchars($_POST["apellidos"]);
        if (empty($nombre) || empty($apellidos)) {
            $errorDel = 'Rellenar todos los campos es obligatorio';
        } else {
            eliminar($nombre, $apellidos, $agenda);
        }
    }

    /* Modificar */
    if (isset($_POST['okMod'])) {
        $nombreCompleto = $_POST['nombreMod'] . " " . $_POST['apellidosMod'];
        $fnacMod = $_POST['fnacMod'];
        $tlfnoMod = $_POST['tlfnoMod'];
        $mailMod = $_POST['mailMod'];
        $ciudadMod = $_POST['ciudadMod'];
        if (isset($agenda[$nombreCompleto])) {
            if (empty($fnacMod)) {
                $fnacMod = $agenda[$nombreCompleto]['fnac'];
            }
            if (empty($tlfnoMod)) {
                $tlfnoMod = $agenda[$nombreCompleto]['tlfno'];
            }
            if (empty($mailMod)) {
                $mailMod = $agenda[$nombreCompleto]['mail'];
            }
            if (empty($ciudadMod)) {
                $ciudadMod = $agenda[$nombreCompleto]['ciudad'];
            }
            modificar($tlfnoMod, $mailMod, $_POST['nombreMod'], $_POST['apellidosMod'], $ciudadMod, $fnacMod);
        } else {
            $errorMod = 'No existe el contacto ' . $_POST['nombreMod'] . ' ' . $_POST['apellidosMod'];
        }
    }

    mostrarAgenda($agenda);
    ?>

</body>

</html>