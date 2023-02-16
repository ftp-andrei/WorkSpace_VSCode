<?php
namespace app\iberia\repositorio;
class Arrays3Repositorio{
    public function getDiccionario():array{
        $diccionario = [
            "ingles" => ["hello","thanks","i love you","Goodbye","Please"],
            "frances" => ["bonjour","merci","je t'aime","Au revoir","S’il vous plaît"],
            "español" => ["hola","gracias","te quiero","Adios","Por favor"]
        ];
        return $diccionario;
    }
}

?>