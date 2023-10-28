function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let step = 0; step < 360; step++) {
    let blocks = `<div class="block" style="width:100vw; height: 100vh;">`;
    $("body").append(blocks);
    $(".block").css("display", "none");
}

$(".block").each(function () {
    $(this).on("mouseenter", function () {
        $(this).css("background-color", "rgb(" + getRandomInt(200) + "," + getRandomInt(200) + "," + getRandomInt(200) + ")");
    });
})

//replaceWith
$("#randomBtn").css("display", "none");
$("#randomBtn").on("click", function () {
    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);
    $("#randomBtn").css("border", "3px solid rgb(" + r + "," + g + "," + b + ")");
    $(".block").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
    console.log(r, g, b);
    $("p").replaceWith("<p>Random Background!</p>");
});

//click event
$("#whiteBtn").css("display", "none");
$("#whiteBtn").on("click", function () {
    $("#randomBtn").css("border", "1px solid black");
    $("#body").css("background-color", "rgb(255,255,255)");
    $(".block").css("background-color", "rgb(255,255,255)");
    $("#whiteBtn").hide(function () { })
    $("#blackBtn").show(function () { })
    $("p").replaceWith("<p>Get Random Background</p>");
});

$("#blackBtn").on("click", function () {
    $("#randomBtn").css("border", "1px solid black");
    $("#body").css("background-color", "rgb(0,0,0)");
    $(".block").css("background-color", "rgb(0,0,0)");
    $("#whiteBtn").show(function () { })
    $("#blackBtn").hide(function () { })
    $("p").replaceWith("<p>Get Random Background</p>");
});

//fadeIn
$("#showBtn").on("click", function () {
    $(".block").fadeIn("slow", function () {
    });
    $("#showBtn").hide(function () { })
    $("#hideBtn").show(function () { })
    $("#randomBtn").show(function () { })
});

//fadeOut
$("#hideBtn").css("display", "none");
$("#hideBtn").on("click", function () {
    $(".block").fadeOut("slow", function () {
    });
    $("#showBtn").show(function () { })
    $("#hideBtn").hide(function () { })
    $("#randomBtn").hide(function () { })
});
