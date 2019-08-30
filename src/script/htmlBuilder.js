const htmlBuilder = {
    buildInputField: () => {
        return `
        <div id="input-box">
        <div class="input-item">
        <input type="text" placeholder="parks by Feature">
        <button id="park-btn">Search</button>
        </div>
        <div class="input-item">
        <input type="text" placeholder="breweries">
        <button id="brewery-btn">Search</button>
        </div>
        <div class="input-item">
        <input id="concert-genre" type="text" placeholder="concerts by genre">
        <button id="concert-btn">Search</button>
        </div>
        </div>
        `
        },

    buildConcertResultField: (genre) => {
        return `
        <div id="concert-result-box">
        <h4>Artist:</h4>
        <p>${genre.name}</p>
        <h4>Date of Concert:</h4>
        <p>${genre.dates.start.localDate}</p>
        <h4>Link to Buy Tickets:</h4>
        <p>${genre.url}</p>
        </div>
        `
    }

}