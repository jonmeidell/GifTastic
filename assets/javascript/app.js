$(document).ready(function () {

    var buttons = [];

    function populateButtons() {

        $("#button").empty();
        for (i = 0; i < buttons.length; i++) {
            var newButton = $("<button>");
            newButton.addClass("gifButtons");
            newButton.attr("data-type", buttons[i]);
            newButton.text(buttons[i]);
            $("#button").append(newButton);
        };
    };

    function populateGifs(topic) {
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
                $(selectedGif).attr("data-animate", choices[i].images.fixed_height.url);
                $(selectedGif).attr("data-state", "still");
                $(selectedGif).addClass("gif");
                $(gifDiv).append(title);
                $(gifDiv).append(selectedGif);
                $(gifDiv).append(rating);
                $("#gifAreaDiv").prepend(gifDiv);
            }
        });
    };
    // because this does not exist yet
    $(document).on("click", ".gif", function(){
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $(".clickMe").on("click", function () {
        var topic = $("#gifTopic-input").val();
        buttons.push(topic);
        populateButtons();
        populateGifs(topic);
    })
    // because this does not exist yet
    $(document).on("click", ".gifButtons", function () {
        var topic = $(this).attr("data-type");
        console.log(topic);
        populateGifs(topic);
    });
});