<?php 

require("conexao.php");

$id = $_POST["id"];

$consulta = $pdo->prepare("DELETE FROM gastos WHERE id = :id");

$consulta->bindValue(":id", $id);

$consulta->execute();

echo "Gasto excluído"

?>