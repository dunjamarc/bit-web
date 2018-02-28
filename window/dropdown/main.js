function dropdown(arr, node){
    var selectEl = document.createElement('select');
    for(var i = 0; i < arr.length; i++){
        var newO = document.createElement('option');
        var textO = document.createTextNode(arr[i]);
        newO.appendChild(textO);
        selectEl.appendChild(newO);
    }
    
    document.querySelector(node).appendChild(selectEl);
}

dropdown(['blue', 'red', 'green'], 'div');

function dropdown2(arr, node){
    var selectEl = "<select>";
    for(var i = 0; i < arr.length; i++){
        var optionEl = "<option>" + arr[i] + "</option>";
        selectEl += optionEl;
    }
    selectEl += "</select>";
    document.querySelector(node).innerHTML = selectEl;
}
dropdown2(['north', 'south', 'west', 'east'], 'div:last-of-type');


function checkInput(){
    var inputArr = document.querySelectorAll('input');
    for(var i = 0; i < inputArr.length; i++){
        if(inputArr[i].hasAttribute('required') && (inputArr[i].value === '')){
            inputArr[i].setAttribute('style', 'border: 2px solid red');
        }
    }
}