// Get all Countries
$(document).ready(function () {
    
    $.ajax({
        url: 'https://restcountries.com/v2/all?fields=flags,name,population,region,capital',
        type: 'GET',
        success: function(countries) {

        },
        error: function (err) {
            console.log(err);
        }
    })
});
