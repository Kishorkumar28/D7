// Fetch data from the API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Print details for each country
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg); // Assuming you want the SVG flag
      console.log("-------------------------------------");
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
