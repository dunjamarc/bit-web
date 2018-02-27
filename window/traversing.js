function f(){
    var li = document.querySelector(".active");
    li.className = "";
    var newLi = li.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
    newLi.className = "active";
}
f();