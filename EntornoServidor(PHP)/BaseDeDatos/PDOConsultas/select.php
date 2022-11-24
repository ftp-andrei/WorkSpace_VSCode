<?php
//Sentencia SQL
$sql = 'SELECT name,LocationID,CostRate FROM Production.Location WHERE CostRate >?'; //Cambiado el ? por ':ratio'

try {
    //iniciamos conexion
    $con = new PDO('sqlsrv:server=(local);database=AdventureWorks2019', "", "");
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //Preparamos la sentencia sql
    $stn = $con->prepare($sql);
    // Ya no hay 0 en donde esté la 1era ?
    $stn->bindValue(1, "0");
    //Ejecutamos sentencia
    $stn->execute();
    //Mostramos las filas
    // while ($files = $stn->fetch(PDO::FETCH_ASSOC)) {
    //     print_r($files);
    // }
    $files = $stn->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $ex) {
    //Mensaje error
    $error = $ex->getMessage();
} finally {
    //Si existe conexion, se elimina
    if (isset($con)) {
        unset($con);
    }
}
//Mostrar $Sfiles
var_dump($files);
// Es asociativa al select no a la bbdd/tabla