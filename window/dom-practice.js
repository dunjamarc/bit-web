function classEl(){
    var ul = document.querySelector("ul:nth-of-type(2)");
    return ul.className="color";
}
classEl();

function liElements(){
    var li = document.getElementsByTagName("li");
    for(var i = 0; i < li.length; i++){

        li[i].className ="color-li";
    }
}

liElements();

function lastLi(){
    var lastli = document.querySelectorAll("ul:last-of-type li");
    for(var i = 0; i < lastli.length; i++){

        lastli[i].className ="color-last";
    }

}

lastLi();