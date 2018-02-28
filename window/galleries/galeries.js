function border(){
    var img = document.querySelector(".selected");
    img.className = "";
    img.parentElement.nextElementSibling.firstElementChild.nextElementSibling.className = "selected";
}

border();

function alertHome(){
    alert(document.querySelector("li").textContent);
}
alertHome();

function replaceText(t){
    document.querySelector("li:last-of-type").textContent = t;
}
replaceText("tralala");