// Get all Countries
$(document).ready(function () {
    
    $.ajax({
        url: 'https://restcountries.com/v2/all?fields=flags,name,population,region,capital',
        type: 'GET',
        success: function(countries) {
            console.log(countries);
            let def = $('#default');
            let defContent = "";
            countries.forEach(country => {
                if(country.name === "Germany" || country.name === "United States of America" || country.name === "Brazil" || country.name === "Iceland"){
                    defContent = `
                    <div id="" class="countryDiv">
                        <img  class="flag" src="${country.flags.png}"/>
                        <div id="" class="name"><strong>${country.name}</strong></div>
                        <div id="" class="population"><b>Population </b> ${country.population}</div>
                        <div id="" class="region"><b>Region: </b> ${country.region}</div>
                        <div id="" class="capital"><b>Capital: </b> ${country.capital}</div>
                    </div>
                    `;
                    def.append(defContent);
                }
            });
        },
        error: function (err) {
            console.log(err);
        }
    })
});
