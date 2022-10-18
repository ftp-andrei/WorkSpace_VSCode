<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 22</title>
</head>

<body>
    <p><b>
            Investiga sobre los arrays de PHP. En concreto, como se definen y se inicializan (dos posibles formas) y los dos tipos de las claves de acceso a los elementos del array (índices numéricos clásicos y cadenas (arrays asociativos)) <br>

            a) Define un array $meses a través de una de las dos posibles formas, con claves de índice numérico de base 0, cuyos elementos sean los nombres de los meses del año. Recorre el array con un bucle for y muestra los nombres en la ventana del navegador.</b><br>

        <?php
        $array = array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
        echo 'Desde Print_R: ';
        print_r($array);

        $array2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        [$Enero, $Febrero, $Marzo, $Abril, $Mayo, $Junio, $Julio, $Agosto, $Septiembre, $Octubre, $Noviembre, $Diciembre] = $array2;

        echo '<br> Desde echo: ' . $Enero . ' ' . $Febrero . ' ' . $Marzo . ' ' . $Abril . ' ' . $Mayo . ' ' . $Junio . ' ' . $Julio . ' ' . $Agosto . ' ' . $Septiembre . ' ' . $Octubre . ' ' . $Noviembre . ' ' . $Diciembre;

        echo '<br>Desde for: ';
        for ($i = 0; $i < sizeof($array); $i++) {
            echo $i . '=>' . $array[$i] . ' ';
        }

        echo '<br>Desde foreach: ';
        foreach ($array as $clave => $valor) {
            echo "{$clave} => {$valor} ";
        }
        ?>

        <br>
        <b>
            b) Define un array $meses2 empleando la segunda forma, diferente de la anterior, con claves de índice numérico de base 1, cuyos elementos sean los nombres de los meses del año. En la definición del array solo se debe especificar la clave numérica una única vez. Recorre el array con un bucle while ayudándote de la función de array que informa de la cantidad de elementos que tiene el array. Muestra los nombres de los meses en la ventana del navegador</b><br>

        <?php
        $meses2 = array(1 => 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
        echo 'Desde Print_R: ';
        print_r($meses2);

        $i = 1;
        echo '<br>Desde while: ';
        while ($i <= sizeof($meses2)) {
            echo $i . '=> ' . $meses2[$i] . ' ';
            $i++;
        }

        ?>


    </p>
</body>

</html>