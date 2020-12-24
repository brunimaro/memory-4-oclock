<?php
/* 
    /inc/read.php
    Affichage du top 5
*/

include 'functions.php';
// Connection à la bdd MySQL
$pdo = pdo_connect_mysql();

// Prepare la requete des données de la table score. On limite à 5 données pour l'affichage du TOP 5
$stmt = $pdo->prepare('SELECT * FROM score ORDER BY score LIMIT 5');
$stmt->execute();

// Fetch les enregistrements pour l'affichage dans la page
$scores = $stmt->fetchAll(PDO::FETCH_ASSOC);