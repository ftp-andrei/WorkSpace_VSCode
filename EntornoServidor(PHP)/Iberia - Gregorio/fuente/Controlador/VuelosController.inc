<?php 
namespace app\iberia\controlador;
use app\iberia\modelo\Pasajero;
use app\iberia\repositorio\UsuarioPasajeroRepositorio;
use app\iberia\repositorio\VuelosRepositorio;

class VuelosController{
    public function reservaPlazas(){
        $reservaAsientos=(new VuelosRepositorio()) -> asientos($_SESSION['viaje']['origen'],$_SESSION['viaje']['ida']);
    }
}
?>