/* 

/src/assets/js/main.js    
Fonctions principales du Jeu de Memory

*/

$( document ).ready(function() {

    // Variables de jeu

    var score = 0;
    var paire = 0; // Initialisation du nombre de paires
    var gagne = 14; // Nombre de paires qu'il faut totaliser pour gagner
    var tempsLimite = 100; // Temps limite de jeu en s.
    var statut

    // L'ensemble des cartes disponibles dans l'image cards.png

    var total_cartes = Array(
        "item1",
        "item2",
        "item3",
        "item4",
        "item5",
        "item6",
        "item7",
        "item8",
        "item9",
        "item10",
        "item11",
        "item12",
        "item13",
        "item14",
        "item15",
        "item16",
        "item17",
        "item18"
    );

    // Fonction pour mélanger un array

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    
    // Fonction de tirage d'un plateau aléatoire de 14 cartes piochées dans les 18 disponibles

    function tirage() {

        // Tirage d'un deck de 14 cartes

        shuffle(total_cartes);
        total_cartes.splice(14, 18);

        var monDeck = total_cartes.concat(total_cartes);

        shuffle(monDeck);
        //console.log(monDeck);        

        for (let i = 0; i < 28; i++) {
            $(".card:eq("+i+")").attr('data-card',monDeck[i]);
        }

    }

    tirage();

    var compteurClic = 0;
    var carteJouees = Array();

    // on clique sur une carte
    
    $( ".card.cache" ).on( "click", function() {

        if ($(this).hasClass("cache")) {
       
            compteurClic++;  // incremente le nb de clic

            carteJouees[compteurClic] = $(this).attr("data-card");  //on recupere le nom de l'item

            $(this).addClass("clic"); // on marque l'item comme selectionné
            $(this).removeClass('cache'); // et on le rend visible

            if (compteurClic=="2") {
                setTimeout(testcard, 500); // si une paire est constituée , on lance un test pour verifie si c'est une paire jumelle
            }

            //console.log( $( this ).attr('data-card') );

    }        

    });

function resultat(j) {

    if ((paire==gagne)&&(j<tempsLimite)&&(statut!="gagne")) {
        //alert("BRAVOOOOOO !!!! c'est gagné! Tu as réussi en "+ j + "s");
        $(".texte").html("BRAVOOOOOO !!!! c'est gagné! Tu as réussi en "+ j + "s");
        $("#score").val(j);
        $("#formulaire").removeClass("invisible");
        statut = "gagne";
        return false;

    } else if ((j>tempsLimite)) {

        $(".inner").text("PERDU!");
        $(".percent").text();
    
        if ( confirm( "oooooh miiiiiince!!! c'est PERDU!!! Veux tu rejouer ?" ) ) {
            // Code à éxécuter si le l'utilisateur clique sur "OK"
            document.location.reload(); // on recharge la page et le jeu recommence
           
        } else {
            // Code à éxécuter si l'utilisateur clique sur "Annuler"                
            $(".texte").html("<div class='row'>Merci d'avoir joué et à bientôt :)</div>");
            $("#start").removeClass("invisible");
            $("#temps").addClass("invisible");
            $("#plateau").addClass("invisible");
            $(".inner").html("");
            return false;
        }

    }

}

// Fonction de test pour comparer la paire qui a été sélectionnée

function testcard() {

    if (carteJouees[1] == carteJouees[2]) {

        //console.log("bravo!");

        $("[data-card='"+carteJouees[1]+"']").removeClass('clic');
        $("[data-card='"+carteJouees[2]+"']").removeClass('clic');
        $("[data-card='"+carteJouees[1]+"']").addClass('bravo');
        $("[data-card='"+carteJouees[2]+"']").addClass('bravo');

        paire++; // On incremente le nombre de paires découvertes

        resultat(score); // On teste le score

    } else {

        // On réinitialise l'etat de la paire non gagnante pour la replacer dans le plateau

        $('.clic').each(function(index, value){
            $(this).addClass('cache');
            $(this).removeClass('clic');        
        });

    }

    compteurClic = 0; // On réinitialise le compteur de clic
    carteJouees = Array(); // On réinitialise le tableau des données la dernière paire selectionnée

}

/* Chronometre */

function compteurTemps() {

    // Cette fonction gère le compte à rebours defini par la variable tempsLimite

    var i = 0;

    setInterval(function() {

        if ((i<=tempsLimite)&&(statut!="gagne")) {
            i++;
            $(".inner").css("width", (100/tempsLimite)*i + "%");
            // $(".percent").text(100-i + ' s.');
            //console.log(tempsLimite-i + ' s.')
            $(".percent").text((tempsLimite-i + ' s.'));
            score = i;
            resultat(score);            

        }     

    }, 1000);
        
}

/* Initialisation de la partie */

function initPartie() {

    $('#temps').removeClass('invisible');
    $("#start").addClass('invisible');
    $("#highscore").addClass('invisible');
    $(".texte").html("Tu as 100 secondes devant toi pour reconstituer les 14 paires de cartes jumelles.");
    compteurTemps(); // on lance le compteur  Le jeu commence :)

}

// Bouton pour lancer la partie
$( "#start" ).click(function() {

    $( "#plateau" ).removeClass("invisible"); // on rend le plateau visible
    initPartie();

  });

});    