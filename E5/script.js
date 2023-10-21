console.log(document);

//interaction
document.querySelector("b1").addEventListener("click", function () {
    document.getElementById("interactionContainer").style.backgroundColor = "lightgreen";
})

document.querySelector("b2").addEventListener("click", function () {
    document.getElementById("interactionContainer").style.backgroundColor = "plum";
})

document.querySelector("b3").addEventListener("click", function () {
    document.getElementById("interactionContainer").style.backgroundColor = "lightblue";
})

//for loop
let text = "";

for (let i = 1; i < 11; i++) {
    text += "Use a for loop to add repeating text to this container." + i + "<br>";
}
document.querySelector("p1").innerHTML = text;

//condition
const currentTime = new Date().getHours();

if (currentTime < 12) {
    document.getElementById("square").style.backgroundColor = "lightyellow", document.getElementById("square").innerHTML = "Good morning!";
} else if (currentTime < 18) {
    document.getElementById("square").style.backgroundColor = "lightsalmon", document.getElementById("square").innerHTML = "Good afternoon!";
} else {
    document.getElementById("square").style.backgroundColor = "lightblue", document.getElementById("square").innerHTML = "Good evening!";
}

console.log("Current time:" + currentTime);

//time
let fontSize = 24;
const textElement = document.getElementById("increaseText");

const increaseFontSize = () => {
    fontSize += 1;
    textElement.style.fontSize = fontSize + "px";

    if (fontSize >= 50) {
        fontSize = 24;
    }

    console.log("Font size:" + fontSize);
};

const interval = setInterval(increaseFontSize, 1000);

//input
const inputText = document.getElementById("inputText");
const textLength = document.getElementById("text-length");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputValue = inputText.value;
    textLength.textContent = "Entered text: " + inputValue;

    console.log("Entered text: " + inputValue);
});
