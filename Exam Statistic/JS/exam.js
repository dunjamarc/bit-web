function Exam(subject, student, grade){
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function(){
    return this.subject.getSubjectName() + ', ' + this.student.getStudentData();
}

Exam.prototype.hasPassed = function(){
    if(this.grade > 5){
        return true;
    } else {
        return false;
    }
}

function createExam(nameOfSubject, name, surname, grade){
    var subject = new Subject(nameOfSubject);
    var student = new Student(name, surname);
    (function() {
        for(var i = 0; i < allStudents.length; i++){
            if(student.name == allStudents[i].name && student.surname == allStudents[i].surname ){
                return false;
            }
        }
        allStudents.push(student);  // update all students array
    })()
    return new Exam(subject, student, grade);
}