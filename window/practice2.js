var hello = function(){
    alert("Hello!");
    var age = prompt("How old are you?");
    var answer = confirm("We will submit this answer now " + age);
    if(answer){
        alert("Success!");
    }
}
hello();





