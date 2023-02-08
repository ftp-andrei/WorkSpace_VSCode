<?php ob_start();
$destinos = ["Madrid", "Lisboa", "Paris", "Berlin", "Roma", "Praga", "Londres"];
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
<?php if (isset($vuelos)) {

    var_dump($vuelos);
    echo "<input type='submit' value='Siguiente' name='siguiente' id='siguiente'>"; ?>
    <table>
        <thead>
            <tr>
                <th>Fila</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
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
                        echo "<td>" . $fila . "</td>";
                        $cont = 1;
                        echo "<td>" . ($asientosVuelo[$x] & 32 ? "O" : "L") . "</td>";
                        echo "<td>" . ($asientosVuelo[$x] & 16 ? "O" : "L") . "</td>";
                        echo "<td>" . ($asientosVuelo[$x] & 8 ? "O" : "L") . "</td>";
                        echo "<td>" . ($asientosVuelo[$x] & 4 ? "O" : "L") . "</td>";
                        echo "<td>" . ($asientosVuelo[$x] & 2 ? "O" : "L") . "</td>";
                        echo "<td>" . ($asientosVuelo[$x] & 1 ? "O" : "L") . "</td>";
                        echo "</tr>";
                        $fila++;
                    }
                    var_dump($asientosVuelo);
                }
                ?>
        </tbody>
    </table>
<?php
                if (isset($_POST["siguiente"])) {
                    echo "¿Quieres comprar los asientos de vuelta?";
                }
            }
        }
        $contenido = ob_get_clean();
        include 'base.php'; ?>