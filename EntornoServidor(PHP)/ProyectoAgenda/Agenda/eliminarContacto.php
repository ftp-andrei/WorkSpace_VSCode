<?php

function eliminar($nombre, $apellidos, $agenda)
{
    $nombreCompleto = htmlspecialchars($nombre . " " . $apellidos);
    unset($agenda[$nombreCompleto]);
    echo "Persona eliminado! <br>";
    mostrarAgenda($agenda);
}
