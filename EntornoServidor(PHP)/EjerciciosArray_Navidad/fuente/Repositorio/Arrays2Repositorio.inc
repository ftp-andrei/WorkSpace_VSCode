<?php
namespace app\iberia\repositorio;
class Arrays2Repositorio{
    public function tablaEuros():array{
        $arrEuros = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50,1,2,5,10,20,50,100,200,500];
        return $arrEuros;
    }
}

?>