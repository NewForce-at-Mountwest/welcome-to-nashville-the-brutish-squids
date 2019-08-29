
    const parkApi = {
        getAllParks:() => { 
            return fetch(`http://localhost:3000/parks${parkSearchString}`)
            .then(response => response.json())
            .then(parks=>{
                console.log(parks)
                parks.forEach(park =>{
                    document.querySelector("#result-box").innerHTML += parkList()
              })
    })
    }}
