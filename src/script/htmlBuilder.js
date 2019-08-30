// build main input box for input fields, headers, and search buttons
const htmlBuilder = {
    buildInputField: () => {
    return `
    <div id="input-box">
    <div class="input-item">
    <h3 id="park-heading">Find a Park</h3>
    <input type="text" placeholder="parks by Feature">
    <button id="park-btn">Search</button>
    </div>
    <div class="input-item">
    <h3 id="brewery-heading">Find your Favorite Brewery</h3>
    <input id = "breweryInput" type="text" placeholder="breweries by name">
    <button id="brewery-btn">Search</button>
    </div>
    <div class="input-item">
    <h3 id="concert-heading">Find a Concert</h3>
    <input type="text" placeholder="concerts by genre">
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

    // build HTML universal function for results box with a parameter for individual strings
    // buildResultField: (string) => {
    //     return `
    //     <div id="result-box">
    //     <h3>Results:</h3>
    //     ${string}
    //     </div>
    //     `
    // }

}


