<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 10</title>
</head>

<body>
    <p>
    <h1>Ejercicio 10</h1>
    <h2>Investiga en profundidad (si no lo has hecho antes) el tipo de datos string de PHP. Responde a las preguntas:</h2>
    <b>¿Qué diferencia existe entre colocar el mensaje a mostrar entre comillas dobles ("") o simples ('')?</b><br>

    En una cadena con comillas dobles hay diferentes caracteres de escape (como \n o \t ). Esto no está permitido en las cadenas de comillas simples.<br>
    Además, si vamos a declarar una variable de tipo string seria recomendable usar las comillas simples, ya que si usamos las dobles php buscará en dicha cadena variables por lo que su ejecución tardará un poco más.<br><br>

    <b>¿Cuál de las dos formas consume más recursos?</b><br>

    Las comillas dobles.<br><br>

    <b>¿Cuándo se debería emplear una u otra forma?</b><br>

    Si se declara una variable de tipo cadena lo recomendable seria usar las simples.<br><br>

    <b>¿En cuál de las dos formas puedo escapar cada carácter especial?
        ¿Qué efecto tiene especificar el nombre de una variable entre comillas simples o dobles?</b><br>

    En las comillas dobles se pueden usar \n o \t por ejemplo.<br><br>

    <b>¿Qué ventajas e inconvenientes tienen los formatos Heredoc y Nowdoc sobre rodear las cadenas de mensajes entre comillas simples o dobles?</b><br>

    Heredoc se comporta de la misma forma que las comillas dobles pero tiene una sintaxis diferente, y Nowdoc se comporta de la misma forma que las comillas simples pero con otra sintaxis. <br>

    Se pueden iniciar variables estáticas y propiedades/constantes de clase, también es posible entrecomillar el identificador de apertura mediante la sintaxis Heredoc<br><br>

    Heredoc:<br>
    <?php
    echo <<<"BLA"
        Comunicacion por Heredoc
    BLA;
    ?>

    <br><br>Al igual que con heredoc, iniciamos el nowdoc con <<<, pero el identificador que le sigue está delimitado por comillas simples. <br>Las reglas aplicables a los identificadores de heredoc también se aplican a las de nowdoc, como las del identificador de cierre. <br><br>

        NOWDOC:<br>
        <?php
        echo <<<'HEY'
          Comunicacion por NOWDOC
          HEY;
        ?><br><br>

        <b>Para que las definiciones de cadenas Heredoc y Nowdoc se realicen correctamente ¿cuál es la regla que hay que observar?</b><br>
        Que se usen los <<< y el entrecomillado simple o doble dependiendo de cual uses. </p>
</body>

</html>