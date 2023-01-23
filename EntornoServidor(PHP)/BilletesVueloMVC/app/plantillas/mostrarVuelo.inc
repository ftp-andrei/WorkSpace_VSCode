<?php ob_start();
/* Plantilla vuelos */
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
$contenidoVuelo = '';
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
        <button type="submit" id="vertical" name="vertical">Vertical</button>
    </form>
    <br>
    <?php
if(isset($_POST["confirmar"])){
    $contenidoVuelo = "<table border='1'> <caption>" . $_POST['seleccionVuelo'] . " " . $vuelo[$_POST['seleccionVuelo']][0] . " " . $vuelo[$_POST['seleccionVuelo']][1] . "</caption> ";

    $contenidoVuelo .= '<tr>';
    $contenidoVuelo .= "<th class='fila'>A</th>";
    $contenidoVuelo .= "<th class='fila'>B</th>";
    $contenidoVuelo .= "<th class='fila'>C</th>";
    $contenidoVuelo .= "<th class='fila'>Fila</th>";
    $contenidoVuelo .= "<th class='fila'>D</th>";
    $contenidoVuelo .= "<th class='fila'>E</th>";
    $contenidoVuelo .= "<th class='fila'>F</th>";
    $contenidoVuelo .= '</tr>';

    for ($i = 0; $i < 1; $i++) {
        $contenidoVuelo .= '<tr>';
        for ($i = 0; $i < count($vuelo[$_POST['seleccionVuelo']]['asiento']); $i++) {
            $contenidoVuelo .= '<tr>';
            $contenidoVuelo .= "<td " . (!(0b100000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $contenidoVuelo .= "<td " . (!(0b010000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $contenidoVuelo .= "<td " . (!(0b001000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $contenidoVuelo .= '<td class="fila">' . $i + 1 . '</td>';
            $contenidoVuelo .= "<td " . (!(0b100100 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $contenidoVuelo .= "<td " . (!(0b100010 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $contenidoVuelo .= "<td " . (!(0b100001 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $contenidoVuelo .= '</tr>';
        }
    }
    $contenidoVuelo .= "</table>";
echo $contenidoVuelo;
}

if(isset($_POST["vertical"])){
    $contenidoVuelo = "<table border='1'> <caption>" . $_POST['seleccionVuelo'] . " " . $vuelo[$_POST['seleccionVuelo']][0] . " " . $vuelo[$_POST['seleccionVuelo']][1] . "</caption> ";

    $contenidoVuelo .= '<tr>';
    $contenidoVuelo .= '<tr>';
    $contenidoVuelo .= "<th class='fila'>A</th>";
    for ($i = 0; $i < 20; $i++) {
        $contenidoVuelo .= "<td " . (!(0b100000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '<tr>';
    $contenidoVuelo .= "<th class='fila'>B</th>";
    for ($i = 0; $i < 20; $i++) {
        $contenidoVuelo .= "<td " . (!(0b010000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '<tr>';
    $contenidoVuelo .= "<th class='fila'>C</th>";
    for ($i = 0; $i < 20; $i++) {
        $contenidoVuelo .= "<td " . (!(0b001000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '</tr>';
    for ($i = 0; $i < 1; $i++) {
        $contenidoVuelo .= '<tr>';
        $contenidoVuelo .= "<th class='fila'>Fila</th>";
        for ($i = 0; $i < count($vuelo[$_POST['seleccionVuelo']]['asiento']); $i++) {
            $contenidoVuelo .= '<th class="fila">' . $i + 1 . '</th>';
        }
    }
    $contenidoVuelo .= '<tr>';
    $contenidoVuelo .= "<th class='fila'>D</th>";
    for ($i = 0; $i < 20; $i++) {
        $contenidoVuelo .= "<td " . (!(0b000100 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '<tr>';
    $contenidoVuelo .= "<th class='fila'>E</th>";
    for ($i = 0; $i < 20; $i++) {
        $contenidoVuelo .= "<td " . (!(0b000010 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '<tr>';
    $contenidoVuelo .= "<th class='fila'>F</th>";
    for ($i = 0; $i < 20; $i++) {
        $contenidoVuelo .= "<td " . (!(0b000001 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= '</tr>';
    $contenidoVuelo .= "</table>";
    echo $contenidoVuelo;
}
    ?>

<?php
$contenido = ob_get_clean();
include 'base.php'
?>