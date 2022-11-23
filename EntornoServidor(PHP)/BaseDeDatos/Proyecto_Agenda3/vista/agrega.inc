<?php ob_start(); ?>
<p></p>

<?php 
$contenido=ob_get_clean(); //vaciamos el buffer
include "base.inc"; //incluimos el base.inc

?>