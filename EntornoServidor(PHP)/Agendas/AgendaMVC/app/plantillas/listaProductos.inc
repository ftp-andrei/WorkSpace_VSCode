<?php 
ob_start(); 

if(isset($error)){
?>
<p class="error"><?=$error ?></p>
<?php
}else{

echo <<< end
    <table style="background: white">
    <thead>
        <tr>
            <th id="id">ID</th>
            <th id="nombre">Nombre</th>
            <th id="color">Color</th>
            <th id="precio">Precio</th>
            <th id="peso">Peso</th>
        </tr>
    </thead>
    <tbody>
    end;
    foreach ($productos as $clave => $valor) {
        echo "
        <tr>
                <td>" . $valor['ID'] . "</td>
                <td>" . $valor['Nombre'] . "</td>
                <td>" . $valor['Color'] . "</td>
                <td>" . $valor['Precio'] . "</td>
                <td>" . $valor['Peso'] . "</td>
       </tr>";
    }
    echo "
    </tbody>
</table> ";
}
$contenido = ob_get_clean();
include 'base.php';
?>