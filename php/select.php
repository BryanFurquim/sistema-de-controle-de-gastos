<?php 

require("conexao.php");

$sql = "SELECT * FROM gastos";
$consultar = $pdo->prepare($sql);

$consultar->execute();

$gastos = $consultar-> fetchAll();

foreach($gastos as $gasto){

    echo "<tr>";
    echo "<td>" . $gasto["data"] . "</td>";
    echo "<td>" . $gasto["descricao"] . "</td>";
    echo "<td>" . $gasto["categoria"] . "</td>";
    echo "<td>" . $gasto["valor"] . "</td>";
    echo "<td><button class= \"excluir\" data-id=\"" . $gasto["id"] . "\">Excluir</button></td>";
    echo "</tr>";
}
?>