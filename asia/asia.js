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
  const asiaCountries = data.filter(country => country.region === 'Asia');

  // Extract country names
  const asiaCountryNames = asiaCountries.map(country => country.name.common);

  // Print the list of countries from Asia continent
  console.log("Countries in Asia:", asiaCountryNames);
})
.catch(error => {
  console.error("Error fetching data:", error);
});

}