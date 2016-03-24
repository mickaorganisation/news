<?php

//cnx a la bdd
$dsn = 'mysql:host=localhost; dbname=new_db';
$pdo = new PDO($dsn, 'root', '');

$pdo = new PDO($dsn, 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//recup des variables
$titre = isset($_POST['titre'])$_POST['titre']:'';
$url = isset($_POST['url'])$_POST['url']:'';

//query
$query = "insert into flux (titre,url) values (:titre,url)";
$stm = $pdo->prepare($query);
$stm ->bindParam(':titre', $titre, PDO::PARAM_STR);
$stm ->bindParam(':url', $url, PDO::PARAM_STR);
$stm ->execute();

echo 'success';




