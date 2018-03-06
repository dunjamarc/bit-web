// document.querySelector('div').onclick = function(event){
//     console.log("test");
//     var x = event.clientX;
//     var y = event.clientY;
//     document.querySelector('img').style.top = y + 'px';
//     document.querySelector('img').style.left = x + 'px';
// }

// document.querySelector('#stop').addEventListener('click', stopMoving);
// function stopMoving(){
//     document.querySelector('div').onclick = function(event){
//         event.stopPropagation();
//     }
// }

$(function(){

    var counter = 0;
    $('div').on('click', function(event){
        var y = event.pageY;
        var x = event.pageX;
        $('#img-box').css({'top': y+'px',
        'left': x+'px'});
        counter++;

        if(counter > 3){
            $('div').off('click');
            alert('Out of moves!');
        }
    })

    

    $('#stop').on('click', function(event){
        $('div').off('click');
    })
})