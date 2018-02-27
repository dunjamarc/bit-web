function random(){
    var arr = [];
    for(var i = 0; i < 10; i++){
        arr.push(Math.floor(((50 - 1) * Math.random()) + 1));
    }
    console.log(arr);
}

random();

//--------------------

