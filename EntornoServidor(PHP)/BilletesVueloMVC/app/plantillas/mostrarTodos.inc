<?php ob_start();
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

?>

<h1>Compañía Vuelos</h1>
    <br>
    <form method="post">
        <button type="submit" id="mostrarTodos" name="mostrarTodos">Mostrar todos los vuelos</button>
    </form>
    <br>
    <?php
        if(isset($_POST["mostrarTodos"])){
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
    echo $contenidoVuelo;
        }
    ?>

<?php
$contenido = ob_get_clean();
include 'base.php'
?>