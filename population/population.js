// 
const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload= function (){
    // Fetch data from the API
fetch("https://restcountries.com/v3.1/all")
.then(response => response.json())
.then(data => {
  // Filter countries from Asia continent
  const population = data.filter(country => country.population <= 200000);

  // Extract country names
  const less_population = population.map(country => country.name.common);

  // Print the list of countries from Asia continent
  console.log("Countries with less than 200000 population are", less_population);
})
.catch(error => {
  console.error("Error fetching data:", error);
});

}