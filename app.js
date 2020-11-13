var mouseDown = false;


function makeCells(){
    for(let i = 0; i < 100;i++){
        $('section').append($('<div class="cell"><div>'))
    }
}
makeCells();

function onCanvas(){
    let color = $('.active').css('background-color');
    let current = $(this).css('background-color');
    if(current == color){
        $(this).css('background-color','white');
    } else {
        $(this).css('background-color',color);
        console.log(color);
    }
}
$('.cell').on('click',onCanvas);

var colorButtons = $('.color');


colorButtons.click(function onClick(){
    $('.color').removeClass('active');
    $(this).addClass('active');
});

function toggleGrid(){
    let current = $(".cell").css('border');
    if (current === '1px solid rgb(0, 0, 0)'){
        $(".cell").css('border','none');
    } else {
        $(".cell").css('border','1px solid black');
    }
}
$('.grid').on('click',toggleGrid);

function fillAll(){
    $('.cell').css('background-color',$('.active').css('background-color'));
}
$('.fillAll').on('click',fillAll);

function clear(){
    $('.cell').css('background-color','rgb(255, 255, 255)');
}
$('.clear').on('click',clear);

function fillEmpty(){
    let cells = $('.cell');
    for(let i = 0; i < 100; i++){
        let cell = cells[i]
        let currentColor = $(cell).css('background-color');
        if(currentColor == 'rgb(255, 255, 255)'){
            $(cell).css('background-color',$('.active').css('background-color'));
        }
    }
}
$('.fillEmpty').on('click',fillEmpty);