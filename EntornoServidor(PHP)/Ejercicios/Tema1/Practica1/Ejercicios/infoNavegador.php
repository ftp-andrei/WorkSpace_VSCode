<?php
$navegador = getenv("HTTP_USER_AGENT");
?>
<!DOCTYPE html>
<html>

<head>
  <title>Código embebido para conocer el navegador cliente</title>
</head>

<body>
  <p>Estás utilizando un navegador <?php echo $navegador ?>.</p>
</body>

</html>