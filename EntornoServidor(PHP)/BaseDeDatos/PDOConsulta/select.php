<?php
$sql = 'SELECT name,LocationID,CostRate
FROM Production.Location';

$con = new PDO('sqlsrv:server=(local);database=AdventureWorks2019', "", "");
$stn = $con->prepare($sql);
$stn->execute();
$files = $stn->fetchAll(PDO::FETCH_ASSOC);
$con = null;
var_dump($files);
// Es asociativa al select no a la bbdd/tabla
