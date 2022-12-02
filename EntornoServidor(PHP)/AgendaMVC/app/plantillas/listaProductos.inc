<?php 
ob_start();

echo <<< end
    <table class="table table-striped" style="background: white">
    <thead>
        <tr>
            <th scope="col" id="ciudad">ID</th>
            <th scope="col" id="nombre">Nombre</th>
            <th scope="col" id="apellidos">Color</th>
            <th scope="col" id="fnac">Precio</th>
            <th scope="col" id="tlfno">Peso</th>
        </tr>
    </thead>
    <tbody>
    end;
    foreach ($productos as $productos => $contacto) {
        echo "
        <tr>
                <td>" . $contacto['ID'] . "</td>
                <td>" . $contacto['Nombre'] . "</td>
                <td>" . $contacto['Color'] . "</td>
                <td>" . $contacto['Precio'] . "</td>
                <td>" . $contacto['Peso'] . "</td>
       </tr>";
    }
    echo "
    </tbody>
</table> ";


$contenido = ob_get_clean();
include 'base.php';
?>

