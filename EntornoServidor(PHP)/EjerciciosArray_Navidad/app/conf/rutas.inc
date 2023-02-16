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
$mapeoRutas =['inicio' =>
          ['controller' =>'app\iberia\controlador\defaultController', 'action' =>'ejercicio1'],
          'arrays2' =>
          ['controller' =>'app\iberia\controlador\arrays2Controller', 'action' =>'ejercicio2'],
          'arrays3' =>
          ['controller' =>'app\iberia\controlador\arrays3Controller', 'action' =>'ejercicio3'],
          'arrays4' =>
          ['controller' =>'app\iberia\controlador\arrays4Controller', 'action' =>'ejercicio4'],
          'arrays5' =>
          ['controller' =>'app\iberia\controlador\arrays5Controller', 'action' =>'ejercicio5'],
          'arrays6' =>
          ['controller' =>'app\iberia\controlador\arrays6Controller', 'action' =>'ejercicio6'],
          'navidad1' =>
          ['controller' =>'app\iberia\controlador\navidad1Controller', 'action' =>'ejercicio1'],
          'navidad2' =>
          ['controller' =>'app\iberia\controlador\navidad2Controller', 'action' =>'ejercicio2'],
          'navidad3' =>
          ['controller' =>'app\iberia\controlador\navidad3Controller', 'action' =>'ejercicio3']
];
