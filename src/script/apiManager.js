// put this back later

// https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupInput}&token=WAHOFTIBVA2MSM2ENN2X
// const meetupInput = document.querySelector("#meetup-input")
const meetupClickTarget = document.querySelector("#main-container")




meetupClickTarget.addEventListener("click", function(){

    if(event.target.id === "meetups-btn"){
        console.log("hey")
        const meetupInput = document.querySelector("#meetup-input").value;

fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupInput}&token=WAHOFTIBVA2MSM2ENN2X`, {
 headers: {
   "Authorization": `Bearer WAHOFTIBVA2MSM2ENN2X`,
   "Accept": "application/json"
 }
})
.then(response => response.json())
.then(arrayOfMeetups => {
    arrayOfMeetups.events.forEach(singleMeetup => {
        console.log(singleMeetup.name.text)
        return arrayOfMeetups

    })

})

    }
})
// const meetupString = `<p>${arrayOfMeetups.name}<br>${arrayOfMeetups.text}</p>`
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
                    // return Brewery name in string
                        // console.log(singleBrewery)
const  breweryString = `<p>${singleBrewery.name}<br>${singleBrewery.street}</p>`
// print results of search to the DOM
document.querySelector("#main-container").innerHTML += htmlBuilder.buildResultField (breweryString)
                    }) 
                })
    }
}

// add event listener to brewery button to search by brewery name in search input at click of serach button
mainBContainer = document.querySelector("#main-container")
mainBContainer.addEventListener("click",function()
{
    if (event.target.id === "brewery-btn"){
        // get input value from search box
        const breweryName = document.querySelector("#breweryInput").value;
//     // return brewery by name by API manager function by using search input value as paramerter
APIManagerBrew.getBreweries(breweryName)
}
// clear brewery name input field
document.querySelector("#breweryInput").value = "";
    }
)
  




<<<<<<< HEAD
=======
 
>>>>>>> master
