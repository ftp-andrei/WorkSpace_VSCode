<?php
function mostrar($vuelo)
{
    $s = "<table border='1'> <caption>" . $_POST['seleccionVuelo'] . " " . $vuelo[$_POST['seleccionVuelo']][0] . " " . $vuelo[$_POST['seleccionVuelo']][1] . "</caption> ";

    $s .= '<tr>';
    $s .= "<th class='fila'>A</th>";
    $s .= "<th class='fila'>B</th>";
    $s .= "<th class='fila'>C</th>";
    $s .= "<th class='fila'>Fila</th>";
    $s .= "<th class='fila'>D</th>";
    $s .= "<th class='fila'>E</th>";
    $s .= "<th class='fila'>F</th>";
    $s .= '</tr>';

    for ($i = 0; $i < 1; $i++) {
        $s .= '<tr>';
        for ($i = 0; $i < count($vuelo[$_POST['seleccionVuelo']]['asiento']); $i++) {
            $s .= '<tr>';
            $s .= "<td " . (!(0b100000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $s .= "<td " . (!(0b010000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $s .= "<td " . (!(0b001000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $s .= '<td class="fila">' . $i + 1 . '</td>';
            $s .= "<td " . (!(0b100100 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $s .= "<td " . (!(0b100010 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $s .= "<td " . (!(0b100001 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
            $s .= '</tr>';
        }
    }
    return $s;
}

function mostrarTodos($vuelo)
{
    $s = '';
    foreach ($vuelo as $key  => $value) {
        $s .= "<table border='1'> <caption>" . $key . " " . $value[0] . " " . $value[1] . "</caption> ";

        $s .= '<tr>';
        $s .= "<th class='fila'>A</th>";
        $s .= "<th class='fila'>B</th>";
        $s .= "<th class='fila'>C</th>";
        $s .= "<th class='fila'>Fila</th>";
        $s .= "<th class='fila'>D</th>";
        $s .= "<th class='fila'>E</th>";
        $s .= "<th class='fila'>F</th>";
        $s .= '</tr>';

        for ($i = 0; $i < 1; $i++) {
            $s .= '<tr>';
            for ($i = 0; $i < count($vuelo[$key]['asiento']); $i++) {
                $s .= '<tr>';
                $s .= "<td " . (!(0b100000 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $s .= "<td " . (!(0b010000 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $s .= "<td " . (!(0b001000 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $s .= '<td class="fila">' . $i + 1 . '</td>';
                $s .= "<td " . (!(0b000100 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $s .= "<td " . (!(0b000010 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $s .= "<td " . (!(0b000001 & $vuelo[$key]['asiento'][$i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
                $s .= '</tr>';
            }
            $s .= '<br>';
        }
    }
    return $s;
}

function comprar($vuelo)
{
    $s = '<button type="submit" id="comprarAsientos" name="comprarAsientos">Comprar</button>';

    $s .= "<table border='1'> <caption>" . $_POST['seleccionVuelo'] . " " . $vuelo[$_POST['seleccionVuelo']][0] . " " . $vuelo[$_POST['seleccionVuelo']][1] . "</caption> ";
    $s .= '<tr>';
    $s .= "<th class='fila'>A</th>";
    $s .= "<th class='fila'>B</th>";
    $s .= "<th class='fila'>C</th>";
    $s .= "<th class='fila'>Fila</th>";
    $s .= "<th class='fila'>D</th>";
    $s .= "<th class='fila'>E</th>";
    $s .= "<th class='fila'>F</th>";
    $s .= '</tr>';

    for ($i = 0; $i < 1; $i++) {
        $s .= '<tr>';
        for ($i = 0; $i < count($vuelo[$_POST['seleccionVuelo']]['asiento']); $i++) {
            $s .= '<tr>';
            $s .= "<td " . (!(0b100000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $s .= "<td " . (!(0b010000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $s .= "<td " . (!(0b001000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $s .= '<td class="fila">' . $i + 1 . '</td>';
            $s .= "<td " . (!(0b100100 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $s .= "<td " . (!(0b100010 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $s .= "<td " . (!(0b100001 & $vuelo[$_POST['seleccionVuelo']]['asiento'][$i]) ? "class='LibreA'><input type='checkbox'>" : "class='OcupadoA'><input type='checkbox' checked disabled>") . '</td>';
            $s .= '</tr>';
        }
    }
    return $s;
}

function billetesComprados($vuelo)
{
    $s = "a";
    return $s;
}

function vertical($vuelo)
{
    $s = "<table border='1'> <caption>" . $_POST['seleccionVuelo'] . " " . $vuelo[$_POST['seleccionVuelo']][0] . " " . $vuelo[$_POST['seleccionVuelo']][1] . "</caption> ";

    $s .= '<tr>';
    $s .= '<tr>';
    $s .= "<th class='fila'>A</th>";
    for ($i = 0; $i < 20; $i++) {
        $s .= "<td " . (!(0b100000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $s .= '</tr>';
    $s .= '<tr>';
    $s .= "<th class='fila'>B</th>";
    for ($i = 0; $i < 20; $i++) {
        $s .= "<td " . (!(0b010000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $s .= '</tr>';
    $s .= '</tr>';
    $s .= '<tr>';
    $s .= "<th class='fila'>C</th>";
    for ($i = 0; $i < 20; $i++) {
        $s .= "<td " . (!(0b001000 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $s .= '</tr>';
    $s .= '</tr>';
    for ($i = 0; $i < 1; $i++) {
        $s .= '<tr>';
        $s .= "<th class='fila'>Fila</th>";
        for ($i = 0; $i < count($vuelo[$_POST['seleccionVuelo']]['asiento']); $i++) {
            $s .= '<th class="fila">' . $i + 1 . '</th>';
        }
    }
    $s .= '<tr>';
    $s .= "<th class='fila'>D</th>";
    for ($i = 0; $i < 20; $i++) {
        $s .= "<td " . (!(0b000100 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $s .= '</tr>';
    $s .= '</tr>';
    $s .= '<tr>';
    $s .= "<th class='fila'>E</th>";
    for ($i = 0; $i < 20; $i++) {
        $s .= "<td " . (!(0b000010 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $s .= '</tr>';
    $s .= '</tr>';
    $s .= '<tr>';
    $s .= "<th class='fila'>F</th>";
    for ($i = 0; $i < 20; $i++) {
        $s .= "<td " . (!(0b000001 & $vuelo[$_POST['seleccionVuelo']]['asiento'][0 + $i]) ? "class='Libre'>L" : "class='Ocupado'>O") . '</td>';
    }
    $s .= '</tr>';
    $s .= '</tr>';

    return $s;
}
