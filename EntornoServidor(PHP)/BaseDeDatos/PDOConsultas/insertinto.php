<?php
//Sentencia SQL
$sqli = 'INSERT INTO Production.Location(name,CostRate,Availability,ModifiedDate) VALUES (:nombre,:ratio,:disponibilidad,:fecha)';

try {
    //iniciamos conexion
    $con = new PDO('sqlsrv:server=(local);database=AdventureWorks2019', "", "");
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //Preparamos la sentencia sql
    $stn = $con->prepare($sqli);
    // Asignando valores a los nombres
    $stn->bindValue(':ratio', '2');
    $stn->bindValue(':nombre', 'JamonPepito');
    $stn->bindValue(':disponibilidad', '155.0');
    $stn->bindValue(':fecha', '26-11-2022');
    //Ejecutamos sentencia
    $stn->execute();
    //No hace falta a no ser que lo quieras mostrar
    //Mostramos las filas
    // while ($files = $stn->fetch(PDO::FETCH_ASSOC)) {
    //     print_r($files);
    // }
    //$files = $stn->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $ex) {
    //Mensaje error
    $error = $ex->getMessage();
} finally {
    //Si existe conexion, se elimina
    if (isset($con)) {
        unset($con);
    }
}
