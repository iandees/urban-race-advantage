var map = L.map('map').setView([51.505, -0.09], 13);

var bing = new L.BingLayer("Arzdiw4nlOJzRwOz__qailc8NiR31Tt51dN2D7cm57NrnceZnCpgOkmJhNpGoppU", "Aerial");
map.addLayer(bing);

var clue_tmpl = _.template(document.getElementById('clue-template').innerHTML);

$('#add-clue').click(function() {
    console.log('Adding a clue.');
    $('#clues').add(clue_tmpl({clue: {text: "This is dummy text"}}));
});