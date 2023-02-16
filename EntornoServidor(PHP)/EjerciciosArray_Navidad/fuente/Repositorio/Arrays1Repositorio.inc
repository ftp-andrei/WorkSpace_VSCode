<?php
namespace app\iberia\repositorio;
class Arrays1Repositorio{
    public function cambioDivisa(float $euros):mixed{
        $pesetas=number_format($euros*166.386,2);
        return $pesetas;
    }

    public function tablaPesetas():array{
        $arrPesetas = [100, 200, 500, 1000, 2000, 5000, 10000];
        return $arrPesetas;
    }
}

?>