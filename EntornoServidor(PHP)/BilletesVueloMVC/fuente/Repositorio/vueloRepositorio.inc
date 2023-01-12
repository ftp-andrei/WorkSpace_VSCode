<?php

namespace app\educacion\agenda\fuente\repositorio;

class vueloRepositorio{
    //** Crear y mostrar array */
    /* Crear un array de asientos tipo
        $asientos = [
            MadLon[0,1,2],
            MadBer[0,1,2],
            LonMad[0,1,2]
        ]
    */
    public function mostrarVuelo(){
        $asientosMadLon = [0b011001,0b111010,0b011101,0b111111,0b111111,0b011011,0b100101,0b010101,0b000101,0b000000,0b010110,0b010111,0b111001,0b011101,0b110011,0b111000,0b100001,0b011011,0b000000,0b000001];

        $asientosMadBer = [0b001001,0b110110,0b010111,0b011101,0b000101,0b110101,0b011010,0b010101,0b100101,0b000101,0b010011,0b010101,0b011101,0b010100,0b000101,0b001101,0b011001,0b110101,0b111111,0b000111];
    
        $asientosLonMad = [0b010001,0b011010,0b011101,0b010001,0b010100,0b110101,0b010101,0b100101,0b010101,0b010111,0b001101,0b010011,0b110101,0b010001,0b010100,0b010111,0b000000,0b011101,0b010011,0b010110];

        $vuelo = [
        "AK127" =>[
            "Madrid-Londres",
            "00:25",
            "fila" => $asientosMadLon
        ],
        "AM250" => [
            "Madrid-Berlin",
            "01:10",
            "fila" => $asientosMadBer
        ],
        "AK128" => [
            "Londres-Madrid",
            "01:55",
            "fila" => $asientosLonMad
        ]
    ];

    return var_dump($vuelo);
    }
}