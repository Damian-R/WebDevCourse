var movies = [
    {
        name: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        name: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        name: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        name: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    }];

movies.forEach(function(el){
    var watched = "";
    if(el.hasWatched == true)
        watched = "watched";
    else
        watched = "not seen";
    console.log("You have " + watched + " \"" + el.name + "\" - " + el.rating + " stars");
});