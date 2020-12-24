/* 

/src/assets/js/ajax.js    
Traitement de l'enregistrement du score après une partie gagnée

*/

$( document ).ready(function() {
     
    /* On recupère les variables du formulaire d'enregistrement et on les envoie appel au script create.php */
    $('#enregitrer').on( 'click', function(){

        var nom  = $('#nom').val();
        var score = $('#score').val();
   
        
         if(!nom || !score){        

             $('.texte').html("Tous les champs sont obligatoires.");

        } else {

            $.post( 'inc/create.php', { nom: nom, score: score })
                .done(function( data ) {

                if(data > 0){
                    $('.texte').html("'Score enregistré'.");
                }else{
                    $('.texte').html("Le score n'est pas enregistré. Merci de réessayer.");
                }

                setTimeout(function(){
                    window.location.reload(1);
                }, 15000);        

            });
       }

    });

});