// add event listener to brewery button
mainContainer = document.querySelector("#main-container")
mainContainer.addEventListener("click",function()
{
    if (event.target.id === "brewery-btn"){
        // get input value from search box
        const breweryName = document.querySelector("#breweryInput").value;
// fetch breweries by name in Nashville
 fetch(`https://api.openbrewerydb.org/breweries?by_state=Tennessee&by_city=Nashville&by_name=${breweryName}`)
 .then(brResponse => brResponse.json())
 .then(breweries =>{
    // return brewery by name
    return  breweries
}
         
 )   
// clear brewery name input field
document.querySelector("#breweryInput").value = "";
    }
})
  

