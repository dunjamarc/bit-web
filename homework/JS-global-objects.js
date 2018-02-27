var myArr = (function(){
    var arr = [];
    for(var i = 0; i < 10; i++){
        arr.push(((50 - 1) * Math.random()) + 1);
    }
    return arr;
})()

console.log(myArr);


//--------------------------

function round(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(Math.round(arr[i]).toFixed(2));
    }
    return newArr;
}
console.log(round(myArr));

//--------------------------

function floor(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(Math.floor(arr[i]));
    }
    return newArr;
}
console.log(floor(myArr));

//---------------------------------

function maxNum(arr){
    return Math.max(...arr);  // ... max with array
}
console.log(maxNum(myArr));

//-------------------------------DATE

console.log(Date());

