<?php
/* 
    /inc/create.php
    Enregistrement d'un score dans la base de données
*/

// Variables de connexion à la Base de données

function pdo_connect_mysql() {
    
    $DATABASE_HOST = 'nono';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = 'root';
    $DATABASE_NAME = 'memory';

    try {
    	return new PDO('mysql:host=' . $DATABASE_HOST . ';dbname=' . $DATABASE_NAME . ';charset=utf8', $DATABASE_USER, $DATABASE_PASS);
    } catch (PDOException $exception) {
    	// Si il y a une erreur avec la connexion, on stoppe le script et on affiche l'erreur.
    	exit('Failed to connect to database!');
    }
}

?>