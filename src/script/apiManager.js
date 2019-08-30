

const apiManager = {

  getAllConcerts:(searchItem) =>      { 
      return fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&keyword=${searchItem}&apikey=VP4alhnv2if1Gap1yzwlDaptUaPYNr4Y`)
            
        .then(response => response.json())
        .then(concertInfo => {
            concertInfo._embedded.events.forEach(singleConcert => {
                htmlBuilder.buildConcertResultField(singleConcert)

                document.querySelector("#result-box").innerHTML += htmlBuilder.buildConcertResultField (singleConcert)
            })
        })
    }

}


document.querySelector("#main-container").addEventListener("click", function() {
    if(event.target.id === "concert-btn"){
        const searchField = document.querySelector("#concert-genre").value 

    apiManager.getAllConcerts(searchField)
    }
})

