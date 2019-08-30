// build main input box for input fields, headers, and search buttons
const htmlBuilder = {
    buildInputField: () => {
        return `
    <div id="input-box">
    <div class="input-item">

    <h3 id="park-heading">Find a Park</h3>
    <input id="park-input" type="text" placeholder="parks by Feature">
    <button id="park-btn">Search</button>
    </div>
    <div class="input-item">
    <h3 id="brewery-heading">Find your Favorite Brewery</h3>
    <input id = "breweryInput" type="text" placeholder="breweries by name">
    <button id="brewery-btn">Search</button>
    </div>
    <div class="input-item">
    <h3 id="concert-heading">Find a Concert</h3>
    <input id="concert-genre" type="text" placeholder="concerts by genre">
    <button id="concert-btn">Search</button>
    </div>
    <div class="input-item">
    <h3 id="meetup-heading">Find a Cool Meet Up</h3>
    <input type="text" id = "meetup-input" placeholder="Meetups">
    <button id="meetups-btn">Search</button>
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
      




function parkList(park) {
  var pListString = ""
  pListString += `<div class="park-item">`  
  var parkItem = `<p><b>${park.park_name}</b> ${park.mapped_location_address}</p>`
  pListString += parkItem
  pListString += `</div>`
  return pListString
}
