<?php

function mostrar($vuelo)
{
    echo "
    <br>
 <table>
    <thead>
        <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th></th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
        </tr>
    </thead>
    <tbody>";
    $contador = 0;
    $contAsiento = 0;
    foreach ($vuelo as $key => $value) {
        if ($value == "asiento") {
            echo "<tr>";
            for ($x = 0; $x < 7; $x++) {
                if ($x != 3) {
                    echo "<td>" . $value["asiento"][$contAsiento] . "</td>";
                    $contAsiento++;
                } else {
                    echo "<td>" . $contador . "</td>";
                    $contador++;
                }
            }
            echo "</tr>";
        }
    }

    echo "</tbody>

</table>";
}
