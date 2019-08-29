
    const parkApi = {
        getAllParks:(parkSearchString) => { 
            return fetch(`http://localhost:3000/parks${parkSearchString}`)
            .then(response => response.json())
            .then(parks=>{
                console.log(parks)
                parks.forEach(park =>{
                    // debugger
                    document.querySelector("#result-box").innerHTML += parkList(park)
              })
    })
    }}
