const Sound = new Audio("softpiano.mp3");
const Sound1 = new Audio("piano1.mp4");
const Sound2 = new Audio("piano2.mp4");
const Sound3 = new Audio("piano3.mp4");

$("#Excercises").click(e => Sound1.play());
$("#Projects").click(e => Sound2.play());
$("#Readings").click(e => Sound3.play());
$("#h1").click(e => Sound.play());
$("#p1").click(e => Sound.play());


$(".music").html('<audio controls autoplay> <source src="daylight.mp3"  type="audio/mpeg"> </audio>');
$(function () {
    $("#music").draggable();
});

//random background image
$(document).ready(function () {
    var bg = [
        "images/bg2.png",
        "images/bg3.png",
        "images/bg4.png",
        "images/bg5.jpg",
        "images/bg6.png"
    ];

    var index = Math.floor(Math.random() * bg.length);
    $("#bg").css({
        "background": "#348cb2",
        "background-image": "url(" + bg[index] + ")",
        "background-position": "center",
        "background-size": "contain"
    });
});

$("#container1").css("display", "none");
$("#container2").css("display", "none");
$("#container3").css("display", "none");

$("#Excercises").on("click", function () {
    $("#container1").show(function () { })
    $("#container2").hide(function () { })
    $("#container3").hide(function () { })
});

$("#Projects").on("click", function () {
    $("#container2").show(function () { })
    $("#container1").hide(function () { })
    $("#container3").hide(function () { })
});

$("#Readings").on("click", function () {
    $("#container3").show(function () { })
    $("#container1").hide(function () { })
    $("#container2").hide(function () { })
});

$("#h1").on("click", function () {
    $("#container1").hide(function () { })
    $("#container2").hide(function () { })
    $("#container3").hide(function () { })
});

$("#p1").on("click", function () {
    $("#container1").hide(function () { })
    $("#container2").hide(function () { })
    $("#container3").hide(function () { })
});