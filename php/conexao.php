<?php 

    $servidor = "db";
    $porta = 3306;
    $nomeBancoMysql = "cadastro_de_gastos";
    $username = "root";
    $password = "bry190809";

try{
    $pdo = new PDO(
        "mysql:host=$servidor; port=$porta; dbname=$nomeBancoMysql; charset=utf8mb4",
         $username,
         $password
         );

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   
}catch(Exception $e){
    echo "erro : ".$e->getMessage();
}

?>