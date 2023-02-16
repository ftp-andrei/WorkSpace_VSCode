<?php
namespace app\iberia\repositorio;
class Arrays5Repositorio{
    public function getNotas():array{
     $notas=[];
for ($i=0; $i <20; $i++) { 
    $notas[$i] = random_int(0,10);
}
     return $notas;
    }

    public function getNotaEscrita():array{
        $notaEscrita= [
            0 => "Muy deficiente",
            1 => "Muy deficiente",
            2 => "Deficiente",
            3 => "Deficiente",
            4 => "Insuficiente",
            5 => "Suficiente",
            6 => "Bien",
            7 => "Notable",
            8 => "Notable",
            9 => "Sobresaliente",
            10 => "Sobresaliente"
        ];
        return $notaEscrita;
    }
}

?>