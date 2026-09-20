<?php 

require("conexao.php");

$sql = "SELECT * FROM gastos";
$consultar = $pdo->prepare($sql);

$consultar->execute();

$gastos = $consultar-> fetchAll();
?>