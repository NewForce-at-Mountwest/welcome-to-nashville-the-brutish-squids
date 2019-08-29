
const parkApi = {
getParks (park) {
    return fetch(`http://localhost:3000/parks`).then(pResponse => pResponse.json())
}   ,

getParksPlayground (playground) {
    return fetch(`http://localhost:3000/parks?playground=Yes`).then(pResponse => pResponse.json())
        }
    }

console.log(parkApi.getParksPlayground())