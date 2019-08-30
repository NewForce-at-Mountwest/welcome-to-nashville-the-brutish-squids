var parkInput = document.querySelector("#park-btn")

parkInput.addEventListener("click", function(){
    var pSearch
    var parkSearchString = ""
    const parkSearch = document.querySelector("#park-input").value

// makes words into list items
    if (parkSearch === "swimming pool") pSearch = "swimming_pool"
    else if (parkSearch === "swimming") pSearch = "swimming_pool"
    else if (parkSearch === "pool") pSearch = "swimming_pool"
    else if (parkSearch === "playground") pSearch = "playground"
    else if (parkSearch === "baseball") pSearch = "baseball_field"
    else if (parkSearch === "baseball field") pSearch = "baseball_field"
    else if (parkSearch === "basketball court") pSearch = "basketball_courts"
    else if (parkSearch === "basketball") pSearch = "basketball_courts"
    else if (parkSearch === "tennis") pSearch = "tennis_courts"
    else if (parkSearch === "tennis court") pSearch = "tennis_courts"
    else if (parkSearch === "golf") pSearch = "golf_course"
    else if (parkSearch === "golf course") pSearch = "golf_course"
    else if (parkSearch === "skate park") pSearch = "skate_park"
    else if (parkSearch === "skateboarding") pSearch = "skate_park"
    else if (parkSearch === "disc golf") pSearch = "disc_golf"
    else if (parkSearch === "frisbee golf") pSearch = "disc_golf"
    else if (parkSearch === "picnic shelters") pSearch = "picnic_shelters"
    else if (parkSearch === "shelters") pSearch = "picnic_shelters"

// if nothing it searches for list items directly
    else (pSearch = parkSearch)

    parkSearchString += `?${pSearch}=Yes`
    console.log(parkSearchString)
    document.querySelector("#result-box").innerHTML = ""
    parkApi.getAllParks(parkSearchString)
})