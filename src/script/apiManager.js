const parkApi = {
getParks (playground) {
return fetch(`http://localhost:3000/parks`).then(pResponse => pResponse.json())
}
}