// Fetch data from the API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    let countriesWithUSD = [];

    // Iterate through each country
    data.forEach(country => {
      // Check if the country uses US dollars as currency
      if (
        country.currency === "USD" || 
        (country.currencies && country.currencies.USD)
      ) {
        countriesWithUSD.push(country);
      }
    });

    // Print the countries that use US dollars as currency
    if (countriesWithUSD.length > 0) {
      console.log("Countries that use US dollars as currency:");
      countriesWithUSD.forEach(country => {
        console.log(country.name.common);
      });
    } else {
      console.log("No country found that uses US dollars as currency.");
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
