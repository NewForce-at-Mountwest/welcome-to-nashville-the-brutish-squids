// put this back later

// https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupInput}&token=WAHOFTIBVA2MSM2ENN2X
// const meetupInput = document.querySelector("#meetup-input")
const meetupClickTarget = document.querySelector("#main-container")




meetupClickTarget.addEventListener("click", function(){

    if(event.target.id === "meetups-btn"){
        console.log("hey")
        const meetupInput = document.querySelector("#meetup-input").value;

fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupInput}&token=WAHOFTIBVA2MSM2ENN2X`, {
 headers: {
   "Authorization": `Bearer WAHOFTIBVA2MSM2ENN2X`,
   "Accept": "application/json"
 }
})
.then(response => response.json())
.then(arrayOfMeetups => {
    arrayOfMeetups.events.forEach(singleMeetup => {
        console.log(singleMeetup.name.text)
        return arrayOfMeetups

    })

})

    }
})
// const meetupString = `<p>${arrayOfMeetups.name}<br>${arrayOfMeetups.text}</p>`




