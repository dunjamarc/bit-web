var passedNum = 0;
var failedNum = 0;

document.querySelector('#button').addEventListener('click', createLi);

function createLi(event){

    // collect data
    var select = document.querySelector('select');
    var nameOfSubject = select.options[select.selectedIndex].value;  // subject name
    var fullName = document.querySelector('input[name=fullname]').value;
    var nameArr = fullName.split(' ');
    var name = nameArr[0]; // student name
    var surname = nameArr[1]; // student surname
    var grade = document.querySelector('input[name=grade]').value; // grade

    // validation
    

    var exam = createExam(nameOfSubject, name, surname, grade);
    allExams.push(exam);

    // create and add <li>
    var li = document.createElement('li');
    var text = document.createTextNode(exam.getExamInfo());
    li.appendChild(text);
    var span = document.createElement('span');
    span.innerHTML = exam.grade;
    li.appendChild(span);

    if(exam.hasPassed()){
        var ul = document.querySelector('ul:first-of-type');
        ul.appendChild(li);
        passedNum++;
    } else {
        var ul = document.querySelector('ul:nth-of-type(2)');
        ul.appendChild(li);
        failedNum++;
    }

    // total students number
    var totalStudents = document.querySelector('h2 span');
    totalStudents.innerHTML = allStudents.length - 1;  

    // update number of passed and failed
    var passed = document.querySelector('#numOfPassed');
    var failed = document.querySelector('#numOfFailed');
    passed.innerHTML = passedNum;
    failed.innerHTML = failedNum;

    // calculate procent
    var sum = passedNum + failedNum;
    var procent = parseInt(100 / (sum / failedNum));
    var procentOfFailed = document.querySelector('#procent');
    procentOfFailed.innerHTML = procent + '%';
}