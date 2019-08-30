# Welcome to Nashville: Build an itinerary for a day trip to Music City

The Nashville Convention & Visitors Corp has contracted you to build a dashboard for tourists. Approximately 15.2 million people visit Nashville every year. NCVC wants an itinerary builder that lets tourists search for things to do during their stay.

In this app users can search for four different things to do/visit in Nashville:
* parks -- using the Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi)
* breweries -- using the [Open Brewery DB](https://www.openbrewerydb.org/)
* meetups -- using the [Eventbrite API](https://www.eventbrite.com/developer/v3/)
* concerts -- using the [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)

You will be using all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Modular code
1. Building DOM components
1. Handling user events
1. Reading documentation 
1. GitHub
1. CSS
1. Persistent storage (stretch goal)

Your project managers are here to answer any questions about technical requirements and to help remove any roadblocks once you start coding.

## Tourism Search

When the user searches for any of the four categories of things to do, the results should be listed in the DOM. See the wireframe below for a visual cue for how this might look.

## Technical Requirements
1. Each teammate is responsible for one API module. If your group has three members, you are only responsible for three of the APIs. Pick one to skip. You should discuss as a team how you want to handle printing to the DOM.
1. Your functions that build DOM components should be in a different module than your API calls.
1. Plan as a group which functions that build DOM components can be reused.
1. The README for your project should include *detailed* instructions on how another person can download and run the application. PRO TIP: Don't wait until the very end to create the README.
1. Styling is strictly _secondary_, beyond necessary display formatting. Do not add any additional visual enhancements until you have a fully functional app. The goal of every member of the team is to implement functionality with JavaScript
1. You can add whatever boilerplate you want to your `index.html` file, but all results from APIs must be printed dynamically with JavaScript.

## Visual Feature List

To help you along, here is a wireframe of how your app might look. 
**Note:**
- This wireframe shows a restaurant search instead of a brewery search. We had some problems with the restaurant API, so we switched it to breweries. You should be able to search breweries by name, and it should bring up breweries in Nashville that match that name.
- This wireframe includes the first stretch goal. For MVP, you would not need the "Save" buttons or the "My Itinerary" section.**

![welcome wireframe](https://github.com/nashville-software-school/welcome-to-nashville/blob/master/welcome_nash_wireframe2.png?raw=true)

## Notes about the APIs

### Parks API
1. You need to put your `$$app_token` in your fetch
```js
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, {
  "$$app_token": yourToken
})

```

### Eventbrite API
1. You need to put your token in the URL of your fetch request and in the Authorization header
1. You also need to add `"Accept: "application/json"` to the headers.
 ```js
fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchField}&token=${yourToken}`, {
  headers: {
    "Authorization": `Bearer ${yourToken}`,
    "Accept": "application/json"
  }
})

```

## Stretch Goals

### Itinerary Builder
1. Each result item should have an affordance to add the item to the current itinerary. Use your awesome new skills to select the text of the search result ( ie "John Mellencamp at the Ryman" ) and add it to the itinerary list. _Ask your project managers for example code on how to build this feature._
1. Only one itinerary needs to exist at a time. If a user selects an item to add to the itinerary, and an item already exists for that category in the itinerary, then you will need to update the itinerary with the new data

### Nav Bar
1. Instead of displaying all the search fields, search results, and itinerary list at the same time, add a nav bar or other feature(s) for hiding/showing what the user wants to view

### Persistent Storage
Persist your itinerary with json-server. You only need to have a single itinerary. If the user selects a different park, restaurant, etc, use a PUT to update the itinerary with the new data.

To start you off, here's an example of what the itinerary in your API might look like in your database once it's created by the user.

```json
{
  "itinerary":
      {
        "id": 1,
        "park": "Centennial Park",
        "restaurant": "Prince’s Hot Chicken",
        "meetup": "Meeple Mountain Board Game Night",
        "concert": "John Mellencamp at the Ryman"
      }
}
```

Here's an example of what the initial POST request might look like to create the itinerary, where `iteneraryObject` is the itenerary you want to add to your database:
```js
    fetch("http://localhost:8088/itinerary", {
        method: "POST", // or "PUT"
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(itineraryObject)
    })
```
Once the user has created the itinerary, you would use a PUT request to update any changes they make.


## Stretchier Goals
1. Add an affordance to finalize an itinerary, and start a new one.
1. Add ability to view one or all of the itineraries

