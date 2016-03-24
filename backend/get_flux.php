<?php

//cnx a la bdd
$dsn = 'mysql:host=localhost; dbname=new_db';
$pdo = new PDO($dsn, 'root', '');

$pdo = new PDO($dsn, 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//requete
$query = "select * from flux";
//execution requete
$results = $pdo->query($query);

//parcours des resultats et fabrications dun tableu recapitulatif
$tab = [];
foreach($results as $result){

    $tab[] = array('id'=> $result['id'],
        'titre' => $result['titre'],
        'url' => $result['url']);
}

//renvoi d'un objet json
echo json_encode(($tab))

?>