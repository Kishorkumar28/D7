
    fetch("https://restcountries.com/v3.1/all")
    .then(response=>response.json())
    .then(data=>{
        const totapopulation=data.reduce((acc,curr)=> {return acc+curr.population},0)
        console.log("Total population of all countries is:",totapopulation)})

        .catch(err=>
            {
                console.error("Error fetching Data",err)
            })
    
