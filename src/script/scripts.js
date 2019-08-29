var parkInput = document.querySelector("#park-btn")

parkInput.addEventListener("click", function(){
    var parkSearchString = ""
    const parkSearch = document.querySelector("#park-input").value
    parkSearchString += `?${parkSearch}=Yes`
    console.log(parkSearch)
    return parkSearchString
})