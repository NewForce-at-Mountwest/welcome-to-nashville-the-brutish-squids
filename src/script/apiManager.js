// create apiManager object and method
const APIManagerBrew = {
    getBreweries (breweryName) {
        // fetch API by state and city then search by name
        return fetch(`https://api.openbrewerydb.org/breweries?by_state=Tennessee&by_city=Nashville&by_name=${breweryName}`)
            .then(brResponse => brResponse.json())
            .then(breweryToPrint =>
                {
                    // loop through array of breweries returned from fetch
                  breweryToPrint.forEach(singleBrewery =>
                    {
                    // return Brewery name in string???
                        // console.log(singleBrewery.name)
const  breweryString = `<p>${singleBrewery.name}</p>`
console.log(breweryString)
return breweryString
                    }) 
                })
    }
}

// add event listener to brewery button to search by brewery name in search input at click of serach button
mainContainer = document.querySelector("#main-container")
mainContainer.addEventListener("click",function()
{
    if (event.target.id === "brewery-btn"){
        // get input value from search box
        const breweryName = document.querySelector("#breweryInput").value;
//     // return brewery by name by API manager function
APIManagerBrew.getBreweries(breweryName)

}
// clear brewery name input field
document.querySelector("#breweryInput").value = "";
    }
)
  




 