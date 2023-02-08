<?php ob_start();
$destinos = $_SESSION['destinos'];
?>

<form action="" method="post">
    <fieldset>
        <legend>Mostrar ocupacion</legend>
        <label for="salida">Salir de: <input list="listaSalida" name="salida" id="salida" required></label>
        <datalist id="listaSalida">
            <?php foreach ($destinos as $key) {
                echo "<option value='$key'>";
            } ?>
        </datalist>
        <label for="destino">Destino: <input list="listaDestino" name="destino" id="destino" required></label>
        <datalist id="listaDestino">
            <?php
            foreach ($destinos as $key) {
                echo "<option value='$key'>";
            }
            ?>
        </datalist>
        <label for="ida">Ida: <input type="date" name="ida" id="ida" required>
        </label>
        <label for="vuelta">Vuelta: <input type="date" name="vuelta" id="vuelta" required> </label>
        <input type="submit" value="Buscar" name="ok" id="ok">
    </fieldset>

</form>
<?php if (isset($vuelos)) { ?>
    <table>
        <thead>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>Fila</th>
                <th>D</th>
                <th>E</th>
                <th>F</th>
            </tr>
        </thead>
        <!--  Quitar dias en las fechas -->
        <tbody>
            <?php foreach ($vuelos as $ida => $value) {
                if ($ida === 'ida') { ?>
                    <caption>Ida: <?php echo $value[0]["Código"] . " " . $value[0]["Origen"] . "-" . $value[0]["Destino"] . " " . $value[0]["fecha"] ?></caption>
            <?php

                    $fila = 1;

                    $asientosVuelo = [];
                    for ($i = 1; $i <= 20; $i++) {
                        $asientosVuelo[$i] = (int)$value[0]["fila" . $i];
                    }
                    for ($x = 1; $x <= 20; $x++) {
                        echo "<tr>";
                        echo "<td " . ($asientosVuelo[$x] & 32 ? "class='ocupado'>Ocupado" : "class='libre'><input type='checkbox' name='libre'>") . "</td>";
                        echo "<td " . ($asientosVuelo[$x] & 16 ? "class='ocupado'>Ocupado" : "class='libre'><input type='checkbox' name='libre'>") . "</td>";
                        echo "<td " . ($asientosVuelo[$x] & 8 ? "class='ocupado'>Ocupado" : "class='libre'><input type='checkbox' name='libre'>") . "</td>";
                        echo "<td>" . $fila . "</td>";
                        echo "<td " . ($asientosVuelo[$x] & 4 ? "class='ocupado'>Ocupado" : "class='libre'><input type='checkbox' name='libre'>") . "</td>";
                        echo "<td " . ($asientosVuelo[$x] & 2 ? "class='ocupado'>Ocupado" : "class='libre'><input type='checkbox' name='libre'>") . "</td>";
                        echo "<td " . ($asientosVuelo[$x] & 1 ? "class='ocupado'>Ocupado" : "class='libre'><input type='checkbox' name='libre'>") . "</td>";
                        echo "</tr>";
                        $fila++;
                    }
                }
            }
            ?>
        </tbody>
    </table>
<?php
    echo "<div class='centrar'><input type='submit' value='Siguiente' name='siguiente' id='siguiente'><div>";
}
$contenido = ob_get_clean();
include 'base.php'; ?>