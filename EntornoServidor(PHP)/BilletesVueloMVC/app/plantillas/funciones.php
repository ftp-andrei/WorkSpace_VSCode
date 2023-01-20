<?php
function mostrar($vuelo)
{
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
    return $contenidoVuelo;
}

function mostrarTodos($vuelo)
{
    $contenidoVuelo = '';
    foreach ($vuelo as $key  => $value) {
        $contenidoVuelo .= "<table border='1'> <caption>" . $key . " " . $value[0] . " " . $value[1] . "</caption> ";

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
            for ($i = 0; $i < count($vuelo[$key]['asiento']); $i++) {
                $contenidoVuelo .= '<tr>';
                $contenidoVuelo .= "<td " . (!(0b100000 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $contenidoVuelo .= "<td " . (!(0b010000 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $contenidoVuelo .= "<td " . (!(0b001000 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $contenidoVuelo .= '<td class="fila">' . $i + 1 . '</td>';
                $contenidoVuelo .= "<td " . (!(0b000100 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $contenidoVuelo .= "<td " . (!(0b000010 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $contenidoVuelo .= "<td " . (!(0b000001 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $contenidoVuelo .= '</tr>';
            }
            $contenidoVuelo .= '<br>';
        }
    }
    $contenidoVuelo .= "</table>";
    return $contenidoVuelo;
}

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
    $contenidoVuelo = "a";
    return $contenidoVuelo;
}

function vertical($vuelo)
{
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
    return $contenidoVuelo;
}
