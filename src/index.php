<?php
include 'inc/read.php';
// Connect to MySQL database
$pdo = pdo_connect_mysql();

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory 4 o'clock</title>
    <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>
    <h1>Memory 4 o'Clock</h1>
    <div class="row">
        <div id="message" class="message">

            <p class="texte">Tu as 100 secondes devant toi pour reconstituer les 14 paires de cartes jumelles.</p>

            <div id="start" class="bouton">Commencer la partie!!</div>

            <div id="temps" class="invisible">
                <strong>COMPTE à REBOURS :</strong>
                <div id="compteur">
                    <div class="inner"></div>
                    <div class="percent"></div>
                </div>
            </div>

            <form id="formulaire" class="invisible">
                <label for="nom">Ton nom : </label>
                <input type="text" name="nom" placeholder="John Doe" id="nom">
                <input type="hidden" name="score" value='99' id="score">
                <input id="enregitrer" type="submit" value="Enregistrer">
            </form>
            <?php if ($msg): ?>
            <p><?=$msg?></p>
            <?php endif; ?>

            <div id="highscore">
               
                <table>
                    <caption><strong>TOP 5 : Meilleurs temps</strong></caption>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Temps</th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php foreach ($scores as $score): ?>
                        <tr>
                            <td><?=$score['nom']?></td>
                            <td><?=$score['score']?> s.</td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
             
             </div>

        </div>
    </div>
    <div id="plateau" class="invisible">
        <div class="row">
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
        </div>
        <div class="row">
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
        </div>
        <div class="row">
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
        </div>
        <div class="row">
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
            <div class="card cache" data-card=""></div>
        </div>
    </div>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/ajax.js"></script>
</body>
</html>