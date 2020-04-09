$("#gifButtons").on("click", function () {

    // was unable to finish up to do list 
    // put in what button says
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=TTHmuR09JA1TQxrBy3MdvauG7SdkhpsZ?q=" + button - press + "limit=10";
    $.ajax({
        url: queryURL,
        method: "GET",
        // Get and parse the response to retrieve the URL
    }).then(function (response) {
        console.log(response);

        var choices = response.data;
        for (var i = 0; i < choices.length; i++) {
            var gifDiv = $("<div>");
            var selectedGif = $("<img>");
            var rating = $("<p>").text("Rated " + choices[i].rating);
            var title = $("<p>").text(choices[i].title);
            $(selectedGif).attr("src", topics[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-still", topics[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-animate", topics[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-state", "still");
            $(selectedGif).addClass("gif");
            $(gifDiv).append(selectedGif, title, rating);
            $("gifAreaDiv").prepend(gifDiv);
        }
        // $("#gifAreaDiv").prepend("<img src='" + response.data.images.downsized_large.url + "'>");
    });

    $(".gif").on("click", ".gif", function () {
        var gifState = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    // add in inout for gifs

    $("#gifButtons").on("click", function (event) {
        // could/should this be the same var as on 13?
        var gifTopic = $("#gifTopic-input").val();
        console.log("gifTopic", gifTopic);
        $("#gifButtons").text(gifTopic);
    });
});