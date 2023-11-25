const Sound = new Audio("mouseclick.mp3");

$('.music').html('<audio controls autoplay> <source src="daylight.mp3"  type="audio/mpeg"> </audio>');
//const audio = new Audio("daylight.mp3");
//audio.autoplay = true;


$(function () {
    $("#Btn0").draggable();
});

$(function () {
    $("#container0").draggable();
});

$(function () {
    $("#music").draggable();
});

$(function () {
    $("#container").sortable();
});

///
/*Dragganle Button*/
$("#showBtn").on("click", function () {
    $("#container0").show(function () { })
    $("#hideBtn").show(function () { })
    $("#showBtn").hide(function () { })
});

$("#hideBtn").on("click", function () {
    $("#container0").hide(function () { })
    $("#showBtn").show(function () { })
    $("#hideBtn").hide(function () { })
});

/*Btn click audio*/
$('#showBtn').click(e => Sound.play());
$('#hideBtn').click(e => Sound.play());

///
/*background*/
var li = document.getElementsByTagName('li');
var timer = setInterval(boxChange, 1000);
function boxChange() {
    for (let i = 0; i < li.length; i++) {
        let color = `#${Math.floor((Math.random() * 999999 + 100000))}`;
        let top = (Math.random() * document.body.scrollHeight - 10);
        let left = (Math.random() * document.body.scrollWidth - 10);
        li[i].style.background = color;
        li[i].style.top = top + 'px';
        li[i].style.left = left + 'px';
        console.dir(`${top},${left},${color}`)
    }
}