$("#gifButtons").on("click", function () {

    // was unable to finish up to do list 
    // put in what button says
    var topic = $("#gifTopic-input").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q="+topic+"&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET",
        // Get and parse the response to retrieve the URL
    }).then(function (response) {
        console.log(response);

        var choices = response.data;
       
        for (var i = 0; i < choices.length; i++) {
            console.log("yes!");
            var gifDiv = $("<div>");
            var selectedGif = $("<img>");
            var rating = $("<p>").text("Rated " + choices[i].rating);
            var title = $("<p>").text(choices[i].title);
            $(selectedGif).attr("src", choices[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-still", choices[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-animate", choices[i].images.fixed_height_still.url);
            $(selectedGif).attr("data-state", "still");
            $(selectedGif).addClass("gif");
            $(gifDiv).append(rating);
            $(gifDiv).append(title);
            $(gifDiv).append(selectedGif);
            $("#gifAreaDiv").prepend(gifDiv);
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

});