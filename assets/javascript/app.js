$("#gifButtons").on("click", function () {
                                                                                                        // put in what button says
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=TTHmuR09JA1TQxrBy3MdvauG7SdkhpsZ?q=" + button-press + "limit=10";
    $.ajax({
        url: queryURL,
        method: "GET",
        // Get and parse the response to retrieve the URL
    }).then(function (response) {
        console.log(response);
        $("#gifAreaDiv").prepend("<img src='" + response.data.images.downsized_large.url + "'>");
    });
});