<?php
/* 
    /inc/create.php
    Enregistrement d'un score dans la base de données
*/
include 'functions.php';

// Connection à la bdd MySQL
$pdo = pdo_connect_mysql();

$msg = '';
// Check si POST data n'est pas vide
if (!empty($_POST)) {

    // On teste l'existence des variables et si elle n'existe pas on a la possibilité de les laisser vide
    $id = isset($_POST['id']) && !empty($_POST['id']) && $_POST['id'] != 'auto' ? $_POST['id'] : NULL;
    
    // Check si la variable POST "nom" existe, si non la valeur par defaut est vide, basiquement le traitement est le meme pour les autres variables
    $nom = isset($_POST['nom']) ? $_POST['nom'] : '';
    $score = isset($_POST['score']) ? $_POST['score'] : '';

    // Insère le nouvel enregistrement dans la table 'score'
    $stmt = $pdo->prepare('INSERT INTO score VALUES ( ?, ?, ?)');
    $stmt->execute([$id, $nom, $score]);

    // Output message
    $msg = 'Le score est enregistré';

}