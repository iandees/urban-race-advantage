var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(41.893, -87.645),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var input = /** @type {HTMLInputElement} */(document.getElementById('clue-address'));
var autocomplete = new google.maps.places.Autocomplete(input);

var clues_data = [];

$('#add-clue').click(function() {
    var new_clue = $("#clues li.template").clone();
    new_clue.clue_number = $('#clues').children().length;
    new_clue.marker = new google.maps.Marker({
        map: map
    });
    new_clue.marker.setIcon(/** @type {google.maps.Icon} */({
      url: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+new_clue.clue_number+'%7CFFAA00%7C000000'
    }));
    $(new_clue).removeClass('hide').removeClass('template');
    $(new_clue).appendTo('#clues');

    $(new_clue).find('#number img').attr('src', 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+new_clue.clue_number+'%7CFFAA00%7C000000');

    $(new_clue).find('#solved').click(function(){
        if($(this).is(':checked')){
            $(new_clue).find('#number img').attr('src', 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+new_clue.clue_number+'%7CAADD00%7C000000');
            new_clue.marker.setIcon(/** @type {google.maps.Icon} */({
              url: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+new_clue.clue_number+'%7CAADD00%7C000000'
            }));
        } else {
            $(new_clue).find('#number img').attr('src', 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+new_clue.clue_number+'%7CFFAA00%7C000000');
            new_clue.marker.setIcon(/** @type {google.maps.Icon} */({
              url: 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+new_clue.clue_number+'%7CFFAA00%7C000000'
            }));
        }
    });

    var addr_dom_elem = $(new_clue).find('#clue-address').get(0);
    var autocomplete = new google.maps.places.Autocomplete(addr_dom_elem);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            console.log("Clue " + new_clue.clue_number + " is not found.");
            new_clue.marker.setVisible(false);
        } else {
            new_clue.marker.setPosition(place.geometry.location);
            new_clue.marker.setVisible(true);
        }
    });
});
