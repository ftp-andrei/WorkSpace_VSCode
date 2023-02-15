<?php
namespace app\iberia\repositorio;
class Ejercicio1Repositorio{
    public function cambioDivisa(float $euros):mixed{
        $pesetas=number_format($euros*166.386,2);
        return $pesetas;
    }
}

?>