<?php
namespace app\iberia\repositorio;
class Arrays4Repositorio{
    public function getDiccionario():array{
        $diccionario = [
            "reir" => ["Celebrar con risa algo.","Manifestar regocijo mediante determinados movimientos del rostro, acompañados frecuentemente por sacudidas del cuerpo y emisión de peculiares sonidos inarticulados.","Hacer burla o zumba"],
            "montaña" => ["Gran elevación natural del terreno.","Territorio cubierto y erizado de montes.","Gran acumulación de algo."],
            "buscador" => ["Que busca.","Anteojo pequeño de mucho campo que forma cuerpo con los telescopios, refractores y reflectores para facilitar la observación.","Programa que permite acceder a información en internet sobre un tema determinado."]
        ];
        return $diccionario;
    }
}

?>