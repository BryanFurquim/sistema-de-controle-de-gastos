<?php 

require("conexao.php");

$consultar = $pdo->prepare("SELECT * FROM gastos");

$consultar->execute();

$gastos = $consultar-> fetchAll();

foreach($gastos as $gasto){

    echo "<tr>";
    echo "<td>" . date("d/m/Y", strtotime($gasto["data"])) . "</td>";
    echo "<td>" . $gasto["descricao"] . "</td>";
    echo "<td>" . $gasto["categoria"] . "</td>";
    echo "<td>" . $gasto["valor"] . "</td>";
    echo "<td><button class= \"excluir\" data-id=\"" . $gasto["id"] . "\">Excluir</button></td>";
    echo "</tr>";
}
?>