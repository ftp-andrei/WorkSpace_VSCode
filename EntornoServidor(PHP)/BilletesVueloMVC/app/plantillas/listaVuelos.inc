<?php ob_start();

include 'funciones.php';

$vuelo = [
    "AK127" => [
      "Madrid-Londres",
      "00:25",
      "asiento" => [0b011001, 0b111010, 0b011101, 0b111111, 0b111111, 0b011011, 0b100101, 0b010101, 0b000101, 0b000000, 0b010110, 0b010111, 0b111001, 0b011101, 0b110011, 0b111000, 0b100001, 0b011011, 0b000000, 0b000001]
    ],
    "AM250" => [
      "Madrid-Berlin",
      "01:10",
      "asiento" => [0b001001, 0b110110, 0b010111, 0b011101, 0b000101, 0b110101, 0b011010, 0b010101, 0b100101, 0b000101, 0b010011, 0b010101, 0b011101, 0b010100, 0b000101, 0b001101, 0b011001, 0b110101, 0b111111, 0b000111]
    ],
    "AK128" => [
      "Londres-Madrid",
      "01:55",
      "asiento" => [0b010001, 0b011010, 0b011101, 0b010001, 0b010100, 0b110101, 0b010101, 0b100101, 0b010101, 0b010111, 0b001101, 0b010011, 0b110101, 0b010001, 0b010100, 0b010111, 0b000000, 0b011101, 0b010011, 0b010110]
    ]
  ];

$s = '';
if (isset($_POST['confirmar'])) {
    $s = mostrar($vuelo);
}

if (isset($_POST['mostrarTodos'])) {
    $s = mostrarTodos($vuelo);
}

if (isset($_POST['comprar'])) {
    $s = comprar($vuelo);
}

if (isset($_POST['vertical'])) {
    $s = vertical($vuelo);
}

if (isset($_POST['comprarAsientos'])) {
    $s = billetesComprados($vuelo);
}
?>
    <h1>Compañía Vuelos</h1>
    <br>
    <form method="post">
        <label for="idVuelo">Selecciona un vuelo:</label>
        <select name="seleccionVuelo" id="selectVuelo" name="selectVuelo">
            <?php foreach ($vuelo as $key => $value) {
                echo "<option value=" . $key . ">" . $key . "</option>";
            }
            ?>
        </select>
        <button type="submit" id="Confirmar" name="confirmar">Confirmar</button>
        <button type="submit" id="mostrarTodos" name="mostrarTodos">Mostrar todos los vuelos</button>
        <button type="submit" id="vertical" name="vertical">Vertical</button>
        <button type="submit" id="comprar" name="comprar">Comprar Billetes</button>
    </form>
    <br>
    <?php
    echo $s;
    ?>

<?php
$contenido = ob_get_clean();
include 'base.php'
?>