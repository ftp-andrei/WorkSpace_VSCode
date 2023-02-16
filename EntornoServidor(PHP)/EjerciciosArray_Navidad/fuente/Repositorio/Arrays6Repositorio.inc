<?php
namespace app\iberia\repositorio;
class Arrays6Repositorio{
    public function getNotas():array{
        $notas=[];
   for ($i=0; $i <20; $i++) { 
       $notas[$i] = random_int(0,10);
   }
        return $notas;
       }
   
    public function getNotaEscrita():array{
           $notaEscrita= ["Muy deficiente","Deficiente","Insuficiente","Suficiente","Bien","Notable","Sobresaliente"];
           return $notaEscrita;
       }

    public function getCantidad(array $notas):array{
    $cantidad=[
        "Muy deficiente" => 0,
        "Deficiente" => 0,
        "Insuficiente" => 0,
        "Suficiente" => 0,
        "Bien" => 0,
        "Notable" => 0,
        "Sobresaliente" => 0
    ];
    foreach ($notas as $indice => $valor) {
        if($valor<2){
            $cantidad["Muy deficiente"]= $cantidad["Muy deficiente"]+1;
        }
        if($valor>=2 && $valor<4){
            $cantidad["Deficiente"]= $cantidad["Deficiente"]+1;
        }
        if($valor===4){
            $cantidad["Insuficiente"]= $cantidad["Insuficiente"]+1;
        }
        if($valor===5){
            $cantidad["Suficiente"]= $cantidad["Suficiente"]+1;
        }
        if($valor===6){
            $cantidad["Bien"]= $cantidad["Bien"]+1;
        }
        if($valor>6 && $valor <9){
            $cantidad["Notable"]= $cantidad["Notable"]+1;
        }
        if($valor>=9){
            $cantidad["Sobresaliente"]= $cantidad["Sobresaliente"]+1;
        }

    }

    return $cantidad;
    }

       public function getMedia(array $cantidad):mixed{
        $media=0;
        foreach ($cantidad as $indice => $valor) {
            $media+=$valor;
        }
        return number_format($media/7,2);
       }
}

?>