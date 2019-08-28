

const apiManager = {
    
    getDataForSingleGenre: (singleGenre) => {

        return fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&keyword=${singleGenre.genre}&apikey=VP4alhnv2if1Gap1yzwlDaptUaPYNr4Y
            `
        ).then(response => response.json());

    }



}