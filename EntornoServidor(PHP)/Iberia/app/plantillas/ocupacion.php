<?php ob_start();
$destinos = ["Madrid", "Lisboa", "Paris", "Berlin", "Roma", "Praga", "Londres"];
?>

<form action="" method="post">
    <fieldset>
        <legend>Mostrar ocupacion</legend>
        <label for="salida">Salir de: <input list="listaSalida" name="salida" id="salida"></label>
        <datalist id="listaSalida">
            <?php foreach ($destinos as $key) {
                echo "<option value='$key'>";
            } ?>
        </datalist>
        <label for="destino">Destino: <input list="listaDestino" name="destino" id="destino"></label>
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
<?php
if (isset($vuelos)) {
?>
    <table>
        <thead>

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
            <tr>
                <?php foreach ($vuelos as $ida => $value) {
                    if ($ida === 'ida') {
                ?> <caption>Ida: <?php echo $value[0]["Código"] . " " . $value[0]["Origen"] . "-" . $value[0]["Destino"] . " " . $value[0]["Fecha ida"] ?></caption>
                        <?php foreach ($value as $arrayIda => $value2) {
                            $contador = 0;
                            $fila = 1;
                            for ($x = 0; $x <= 120; $x++) {
                                $contador++;
                                if ($contador !== 4) { ?>
                                    <td><?php
                                        echo $contador;
                                        ?></td>
                                <?php
                                } else {
                                ?>
                                    <td><?php echo $fila;
                                        $fila++ ?></td>
                                <?php
                                }
                                ?>
                                </td> <?php
                                        if ($contador === 7) {
                                            $contador = 0;
                                            echo "</tr><tr>";
                                        }
                                    }
                                }
                            }
                        } ?>
            </tr>
        </tbody>
    </table>
    <?php
    if (isset($_POST["siguiente"])) {
        echo "¿Quieres comprar los asientos de vuelta?";
    }
    ?>
<?php } ?>
<?php
$contenido = ob_get_clean();
include 'base.php'; ?>