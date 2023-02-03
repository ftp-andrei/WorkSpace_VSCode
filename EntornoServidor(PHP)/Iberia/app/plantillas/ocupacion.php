<?php ob_start() ?>

<form action="" method="post">
    <fieldset>
        <legend>Mostrar ocupacion</legend>
        <label for="salida">Salir de: <input type="text" name="salida" id="salida"></label>
        <label for="destino">Destino: <input type="text" name="destino" id="destino"></label>
        <label for="ida">Ida: <input type="date" name="ida" id="ida"></label>
        <label for="vuelta">Vuelta: <input type="date" name="vuelta" id="vuelta"></label>
        <input type="submit" value="Buscar" name="ok" id="ok">
    </fieldset>

</form>
<?php
if (isset($vuelos)) { ?>
    <table>
        <thead>
            <th>Código</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Fecha</th>
            <th>Plazas</th>
            <th>Libre</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <?php foreach ($vuelos as $ida => $value) {
                    if ($ida === 'ida') {
                ?> <caption>Ida: </caption> <?php
                                            foreach ($value as $arrayIda => $value2) {
                                                foreach ($value2 as $valoresIda => $valor) {
                                            ?>
                                <td><?php echo $valor;  ?></td>
                <?php  }
                                            }
                                        }
                                    } ?>
            </tr>
            <tr>
                <?php foreach ($vuelos as $ida => $value) {
                    if ($ida === 'vuelta') {
                        foreach ($value as $arrayIda => $value2) {
                            foreach ($value2 as $valoresIda => $valor) {
                ?>
                                <td><?php echo $valor;  ?></td>
                <?php  }
                        }
                    }
                } ?>
            </tr>
        </tbody>
    </table>
<?php } ?>
<?php
$contenido = ob_get_clean();
include 'base.php'; ?>