<?php ob_start(); //Iniciamos buffer ?>  
<p></p>
<form action="">

<!-- Añadimos contenido -->

</form>

<?php 
$contenido=ob_get_clean(); //vaciamos el buffer, añadiendo el buffer dentro de contenido
include "base.inc"; //incluimos el base.inc

?>