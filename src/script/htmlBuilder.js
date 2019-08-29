const htmlBuilder = {
    buildInputField: () => {
    return `
    <div id="input-box">
    <div class="input-item">
    <input id="park-input" type="text" placeholder="parks by Feature">
    <button id="park-btn">Search</button>
    </div>
    <div class="input-item">
    <input type="text" placeholder="breweries">
    <button id="brewery-btn">Search</button>
    </div>
    <div class="input-item">
    <input type="text" placeholder="concerts by genre">
    <button id="concert-btn">Search</button>
    </div>
    </div>
    `
    },

    buildResultField: () => {
        return `
        <div id="result-box">
        <h3>Results:</h3>
        </div>
        `
    }

}


function parkList() {
  let pListString = ""
  console.log("park list")
  pListString += `<div class="park-list"><ol>`
  for (i = 0; i < parkApi.getParks.length; i++) {
    var parkItem = `<li>${parkApi.getParksPlayground()}</li>`
    pListString += `${parkItem}`
  }
  pListString += `</ol></div>`
  return pListString
}
