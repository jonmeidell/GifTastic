$("#gifButtons").on("click", function () {
    // put in what button says
    var topic = $("#gifTopic-input").val();
    $(topic).append("#gifButtons");
    document.getElementById(topic);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q=" + topic + "&limit=10&rating=pg";
    $.ajax({
        url: queryURL,
        method: "GET",
        // Get and parse the response to retrieve the URL
    }).then(function (response) {

        var choices = response.data;

        for (var i = 0; i < choices.length; i++) {
            var gifDiv = $("<div>");
            var selectedGif = $("<img>");
            var rating = $("<p>").text("Rated " + choices[i].rating);
            var title = $("<p>").text(choices[i].title);
            $(selectedGif).attr("src", choices[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-still", choices[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-animate", choices[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-state", "still");
            $(selectedGif).addClass("gif");
            $(gifDiv).append(title);
            $(gifDiv).append(selectedGif);
            $(gifDiv).append(rating);
            $("#gifAreaDiv").prepend(gifDiv);
        }
    });
    // not animating gifs on click - make changes to html?
    $(".gif").on("click", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            console.log(state);
        }

        if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            console.log(this);
        }
    });
});