<?php
namespace app\ejercicios\repositorio;
class ArraysRepositorio{
    public function cambioDivisa(float $euros):mixed{
        $pesetas=number_format($euros*166.386,2);
        return $pesetas;
    }

    public function tablaPesetas():array{
        $arrPesetas = [100, 200, 500, 1000, 2000, 5000, 10000];
        return $arrPesetas;
    }

    public function tablaEuros():array{
        $arrEuros = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50,1,2,5,10,20,50,100,200,500];
        return $arrEuros;
    }

    public function getDiccionario():array{
        $diccionario = [
            "ingles" => ["hello","thanks","i love you","Goodbye","Please"],
            "frances" => ["bonjour","merci","je t'aime","Au revoir","S’il vous plaît"],
            "español" => ["hola","gracias","te quiero","Adios","Por favor"]
        ];
        return $diccionario;
    }

    public function getDiccionario2():array{
        $diccionario = [
            "reir" => ["Celebrar con risa algo.","Manifestar regocijo mediante determinados movimientos del rostro, acompañados frecuentemente por sacudidas del cuerpo y emisión de peculiares sonidos inarticulados.","Hacer burla o zumba"],
            "montaña" => ["Gran elevación natural del terreno.","Territorio cubierto y erizado de montes.","Gran acumulación de algo."],
            "buscador" => ["Que busca.","Anteojo pequeño de mucho campo que forma cuerpo con los telescopios, refractores y reflectores para facilitar la observación.","Programa que permite acceder a información en internet sobre un tema determinado."]
        ];
        return $diccionario;
    }

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

       public function getNotaEscrita2():array{
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