let autocomplete;

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            fields: ['place_id', 'geometry', 'name']
        });
    
}
window.initAutocomplete = initAutocomplete;

function addCity(newCitySearch) {
    var newCityEl = $('<button>').addClass("li")
}