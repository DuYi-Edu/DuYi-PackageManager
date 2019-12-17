var getMovies = require("./getMovies")
var fs = require("fs");


getMovies().then(movies => {
    var json = JSON.stringify(movies);
    fs.writeFile("movie.json", json, function () {
        console.log("成功！")
    });
})