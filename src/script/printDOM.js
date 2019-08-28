

document.querySelector("#main-container").innerHTML = htmlBuilder.buildInputField ()

document.querySelector("#main-container").innerHTML += htmlBuilder.buildResultField ()



const domPrinter = {

    printGenreData: (genre, dataFromExternalAPI) => {
        if(dataFromExternalAPI._embedded.events.name) {
            genre.name = dataFromExternalAPI._embedded.events.name
        } else {
            genre.name = "No events listed"
        }
        // build HTML string for individual genre
        const htmlStringGenre = htmlBuilder.buildConcertResultField(genre);

        document.querySelector("#concert-result-box").innerHTML = htmlStringGenre
    }
}