<?php
function comprar($vuelo)
{
    $contenidoVuelo = '<button type="submit" id="comprarAsientos" name="comprarAsientos">Comprar</button>';

    $contenidoVuelo .= "<table border='1'> <caption>" . $_POST['seleccionVuelo'] . " " . $vuelo[$_POST['seleccionVuelo']][0] . " " . $vuelo[$_POST['seleccionVuelo']][1] . "</caption> ";
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
            $contenidoVuelo .= "<td " . (!(0b100000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $contenidoVuelo .= "<td " . (!(0b010000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $contenidoVuelo .= "<td " . (!(0b001000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $contenidoVuelo .= '<td class="fila">' . $i + 1 . '</td>';
            $contenidoVuelo .= "<td " . (!(0b100100 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $contenidoVuelo .= "<td " . (!(0b100010 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $contenidoVuelo .= "<td " . (!(0b100001 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $contenidoVuelo .= '</tr>';
        }
    }
    $contenidoVuelo .= "</table>";
    return $contenidoVuelo;
}

function billetesComprados($vuelo)
{
    //Usar $_SESSION
    //mod. array desde .txt

    //Recuperar
    $serialized_array = file_get_contents("my_array.txt");
    $vuelo = unserialize($serialized_array);
    array_push($vuelo, "hola");
    //Meter
    $serialized_array = serialize($vuelo);
    file_put_contents("my_array.txt", $serialized_array);


    $contenidoVuelo = "a";
    return $contenidoVuelo;
}
