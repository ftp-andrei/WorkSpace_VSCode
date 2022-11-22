<?php
$c = new PDO(
    "sqlsrv:Server=(local) ; Database = AdventureWorks2019 ",
    "",
    "",
    array(PDO::SQLSRV_ATTR_DIRECT_QUERY => true)
);
$query = 'SELECT * FROM Person.ContactType';
$stmt = $c->query($query);
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    print_r($row);
}
$c = null;
