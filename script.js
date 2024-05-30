var request = new XMLHttpRequest();
request.open ("GET"= "https://restcountries.com/v3.1/all")
request.send();
request.onload = function (){
    var res = JSON.parse(request.response)
console.log(res)
}



// 1. Get all the countries from Asia continent/region using Filter method
var eur_data = res.filter((ele)=>ele.region === "Asia")
console.log (eur_data);

var eur_name = eur_data.map ((ele)= ele.name.common)
console.log (eur_data);

// 2. Get all the countries with a population of less than 2 lakhs using Filter method
const lowPopulationCountries = restCountries.filter(country => country.population < 200000);
console.log("Countries with population less than 2 lakhs:", lowPopulationCountries.map(country => country.name));

// 3. Print the following details name, capital, flag, using forEach method
console.log("Details of each country:");
restCountries.forEach(country => {
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`);
});

// 4. Print the total population of countries using reduce method
const totalPopulation = restCountries.reduce((acc, country) => acc + country.population, 0);
console.log("Total population of countries:", totalPopulation);

// 5. Print the country that uses US dollars as currency.
const countryUsingUSD = restCountries.find(country => country.currencies.some(currency => currency.code === "USD"));
console.log("Country using US dollars as currency:", countryUsingUSD ? countryUsingUSD.name : "None");
