$(function(){
    
    // Récupération des valeurs du formulaire
    const select    = $('#select');
    const textarea  = $('#textare');

    // $('#contact .alert-danger').remove();

    $('#contact').submit( function (e) {

        e.preventDefault();

        // Validation des champs "input"
        if (select === '~ Sélectionnez ~' || textarea === textarea.val()) {
            $(this).prepend(`
                <div class="alert alert-danger">
                Renseignez les paramètres</div>
                `);
        } else {
            $(this).replaceWith(`
                    <div class="alert alert-success"> 
                    Demande enregistrée</div>
                    `);
        }

    }); //fin $('#contactForm').on('submit',function(e)
}); // Fin function