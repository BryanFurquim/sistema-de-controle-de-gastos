<?php 

    $servidor = "localhost";
    $porta = 3306;
    $nomeBancoMysql = "cadastro_de_gastos";
    $username = "root";
    $password = "bry190809";

try{
    $pdo = new PDO("mysql:host=$servidor;dbname=$nomeBancoMysql", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Banco de dados conectado com sucesso";
   
}catch(Exception $e){
    echo "erro : ".$e->getMessage();
}

?>