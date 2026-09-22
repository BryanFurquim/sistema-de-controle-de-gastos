<?php 

require("conexao.php");

$descricao = $_POST["descricao"];
$categoria = $_POST["categoria"];
$valor = $_POST["valor"];
$data = $_POST["data"];

$sql = "INSERT INTO gastos (descricao, categoria, valor, data) VALUES (:descricao, :categoria, :valor, :data)";

$ligarVarParametro = $pdo->prepare($sql);

$ligarVarParametro->execute([
    ":descricao" => $descricao,
    ":categoria" => $categoria,
    ":valor" => $valor,
    ":data" => $data
]);
//echo " gasto cadastrado";

header("Location: ../index.html");
exit;
?>