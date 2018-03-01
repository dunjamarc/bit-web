function Program(date) {
    this.date = date;
}

var allPrograms = [];


document.querySelector('#button2').addEventListener('click', createProgram);

function createProgram(event) {

    // create li for program
    var newLi = document.createElement('li');
    var date = document.querySelector('#date').value;
    var liText = document.createTextNode(date + ', duration: TBA');
    newLi.appendChild(liText);
    var list = document.querySelector('#programList');
    list.appendChild(newLi);

    // make program object
    var program = new Program(date);
    allPrograms.push(program);

    // create program dropdown
    var numOfPrograms = allPrograms.length;

    var newP = document.createElement("option");
    var optValue = allPrograms[numOfPrograms-1].date;
    var optText = document.createTextNode(optValue);
    newP.appendChild(optText);
    var selectProgram = document.querySelector("#program");
    selectProgram.appendChild(newP);

}

document.querySelector('#button3').addEventListener('click', addMovie);

function addMovie(event){


}