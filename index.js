//Masquer
$('.validation').hide()


//formulaire de  validation

$('form').on('submit', e => {
    e.preventDefault();

    // bordure rouge si vide
    ($('select').val() === "-- Sélectionner --") && $('select').addClass('border-danger')

    //bordure rouge si textarea < 15 caractères
    if ($('textarea').val().length < 15) $('textarea').addClass('border-danger')

    //Envoie 
    if ($('select').val() != "-- Sélectionner --" && ($('textarea').val()).length >= 15) {
        $('form').hide()
        $('.validation').fadeIn()

    }

    //mise en forme   

    $('select').on('input', () => {
        $('select').removeClass('border-danger')
    })
    
    $('textarea').on('input', () => {
        $('textarea').removeClass('border-danger')
    })





})




