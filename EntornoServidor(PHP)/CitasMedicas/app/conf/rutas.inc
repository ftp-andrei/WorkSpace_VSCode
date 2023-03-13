<?php

// Vector multidimensional con rutas a controlador y método que debe
// atender cada enlace
/* formato:
    Primera dimensaión: nombre del enlace pasado mediante variable GET 'ctl'
     'nombreEnlace' => array() segunda dimesion con información del controlador
                       que atiende esa petición, clave 'controller', y del
                       método concreto que está especializado en su tratamiento,
                       clave 'action'
  Se debe agregar una ruta por cada valor diferente que tome la variable 'ctl'.
  La clave 'inicio' referencia la página home de la aplicación y especifica
    el controlador que debe decidir cuál es la vista que se debe mostrar
*/

$mapeoRutas =
  array('inicio' =>
          array('controller' =>'app\CitasMedicas\controlador\defaultController', 'action' =>'inicio'),
          //Login Medico
          'login' =>
          array('controller' =>'app\CitasMedicas\controlador\MedicoController', 'action' =>'login'),
          //Si login medico, entra aqui
          'consultaPacientes' =>
          array('controller' =>'app\CitasMedicas\controlador\MedicoController', 'action' =>'consultaPacientes'),
          // Solicitar cita del paciente
          'solicitarcita' =>
          array('controller' =>'app\CitasMedicas\controlador\PacienteController', 'action' =>'solicitarcita'),
       );
// Al usar slp_autoload hay que poner ruta completa