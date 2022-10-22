<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1
    </title>
</head>

<body>
    <p>
        <b>a) Investiga qué hace el servidor web cuando recibe la petición de un recurso con extensión .php</b> <br>

        El servidor web recibe el mensaje, comprueba que se trata de una petición válida, y al ver que la extension es "php" solicita al intérprete de PHP que le envíe el archivo. <br>

        <b>b) Intenta describir, a grandes rasgos, qué es lo que hace el código anterior</b> <br>

        Identifica el navegador que estás usando. <br>

        <b>c) Incluye el código anterior en un archivo llamado infoNavegador.php y observa el resultado en el navegador</b> <br>

        Estás utilizando un navegador Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36. <br>

        <b>d) Investiga cómo trata el servidor web el archivo infoNavegador.php antes de enviar el resultado de la petición al cliente. (¿realmente lo trata el servidor web?)</b> <br>

        No lo trata el servidor, el navegador hace de intermediario. <br>

        <b>e) Consulta en la documentación para qué se utilizan los diferentes elementos del lenguaje PHP que aparecen el código. Vuelve a describir qué es lo que hace el código anterior, pero ahora de forma más exacta </b> <br>

        $navegador - Nombre de la variable. <br>
        getenv — Obtiene el valor de una variable de entorno.<br>
        HTTP_USER_AGENT - Es un texto que los propios navegadores envían al servidor web para identificarse.<br>
        echo $navegador - Muestra la cadena $navegador.<br>

        <b>f) Investiga las diferentes variables de entorno que se pueden manejar en el código PHP y de qué informan cada una de ellas. ¿Esas variables de entornos son propias de PHP? ¿Se podrían utilizar en otros lenguajes de lado servidor?</b> <br>

        $GLOBALS - Matriz asociativa de todas las variables disponibles en el ámbito del script. <br>
        $_COOKIE - Matriz asociativa de variables pasadas al script por las cookies.<br>
        $_GET - Matriz asociativa de variables pasadas al script por un método GET.<br>
        $_POST - Matriz asociativa de variables pasadas al script por un método POST.<br>
        $_FILES - Matriz asociativa que contiene información acerca de los archivos cargados desde el ordenador del usuario al servidor Web (ver capítulo Gestión de archivos)<br>
        $_ENV - Matriz asociativa de variables de entorno del sistema operativo pasadas al script.<br>
        $_SERVER - Matriz asociativa de variables del servidor pasadas al script (variable de entorno y variables del servidor HTTP especialmente)
        $_REQUEST - Matriz asociativa que combina las matrices $_GET, $_POST y $_COOKIE.<br>
        $_SESSION - Matriz asociativa de datos de sesión accesible en el script <br>

        Si, son variables predefinidas de PHP. Si, en JS por ejemplo. <br>

        <b>g) Investiga otras construcciones/funciones del lenguaje que se pueden utilizar para conocer información sobre el entorno.</b> <br>

        <a href="https://www.php.net/manual/en/indexes.functions.php">Funciones</a> <br>

        <a href="https://www.php.net/manual/en/ref.info.php">Información Entorno</a> <br>

        <b>h) Responde ¿Qué es lo envía el servidor web al cliente?</b> <br>

        El servidor web envía la página al cliente que la había solicitado y el navegador muestra en pantalla la información que le envía el servidor web. <br>

        <b>i) Investiga otros lenguajes de lado servidor que podrían haberse empleado en el código</b> <br>

        JS, Java, C,C++.
    </p>
</body>

</html>