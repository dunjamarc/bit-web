
function Movie(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;
}

var allMovies = [];


document.querySelector('#button').addEventListener('click', function (event) {

    // take values from input
    var movieTitle = document.querySelector("#title").value;
    var movieLength = document.querySelector("#length").value;
    var select = document.querySelector('#genre');
    var option = select.options[select.selectedIndex].value;
    var movieGenre = option[0] + option[option.length - 1];

    
    //validation
    if (movieTitle === "") {
        document.querySelector('#error1').textContent = 'Please enter movie title';
        return false;
    } else {
        document.querySelector('#error1').textContent = '';
    }
    
    if (movieLength === "" || movieLength <= 0) {
        document.querySelector('#error2').textContent = 'Please enter correct movie length in minutes';
        return false;
    } else {
        document.querySelector('#error2').textContent = '';
    }

    if (option === "-") {
        document.querySelector('#error3').textContent = 'Please choose genre';
        return false;
    } else {
        document.querySelector('#error3').textContent = '';
    }


    // make movie object
    var movie = new Movie(movieTitle, movieLength, movieGenre);
    allMovies.push(movie);

    //create li and append to ul
    var newLi = document.createElement('li');
    var liText = document.createTextNode(movieTitle + ', ' + movieLength + 'min, ' + movieGenre.toUpperCase());
    newLi.appendChild(liText);
    var list = document.querySelector('ul');
    list.appendChild(newLi);

    // empty form
    document.querySelector("#title").value = "";
    document.querySelector("#length").value = "";
    document.querySelector('#genre').value = "-";

    // all length
    var totalLength = 0;
    for (var i = 0; i < allMovies.length; i++) {
        var n = Number(allMovies[i].movieLength);
        totalLength += n;
    }
    document.querySelector("#span1").textContent = totalLength + 'min';

})
