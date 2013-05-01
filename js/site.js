var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(41.893, -87.645),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var input = /** @type {HTMLInputElement} */(document.getElementById('clue-address'));
var autocomplete = new google.maps.places.Autocomplete(input);

var clues_data = [];

$('#add-clue').click(function() {
    clues_data.push({clue:null, address:null, lat:null, lon:null, solved:false, assigned_to:null});

    console.log('Adding a clue.');
    var new_clue = $("#clues li#clue-template").clone();

    var autocomplete = new google.maps.places.Autocomplete($(new_clue).find('#clue-address').get(0));


    $(new_clue).removeClass('hide');
    $(new_clue).appendTo('#clues');
});