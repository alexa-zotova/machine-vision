console.log('hello')

// достать элементы из страницы
var button = document.getElementById("pink-btn");
console.log(button);
button.addEventListener("click", function () {
    document.querySelector('body').style.background = "pink"
});

var clownButton = document.getElementById("clown-btn");
clownButton.addEventListener("click", function () {
    var newCircle = document.createElement("div");
    newCircle.classList.add("clown-circle");
    var clownBox = document.querySelector(".clown-box");
    clownBox.appendChild(newCircle);
});

var deleteClownButton = document.getElementById("delete-clown-circle");
deleteClownButton.addEventListener("click", function () {
   var circles = document.querySelectorAll(".clown-circle");
   if (circles.length > 0) {
   var firstCircle = circles[0];
   firstCircle.remove();
   }
});

var db = document.getElementById("delete-body");
db.addEventListener("dblclick", function () {
    var body = document.querySelector("body");
    body.remove();
});

var toggleButton = document.getElementById("toggle-btn");
toggleButton.addEventListener("click", function () {
    var body = document.querySelector("body");
    body.classList.toggle('blue-bg');
});

var rectButton = document.getElementById("rect-btn");
rectButton.addEventListener("click", function () {
    var newRect = document.createElement("button");
    newRect.classList.add("rounded-rect");
    newRect.style.background = randomColor();
    var clownBox = document.querySelector(".clown-box");
    clownBox.appendChild(newRect);
});

var fancyButton = document.getElementById("fancy-btn");
fancyButton.addEventListener("click", function () {
    var newFancyRect = document.createElement("button");
    newFancyRect.classList.add("fancy-rect");
    newFancyRect.style.background = randomLinearGradient(45);
    var clownBox = document.querySelector(".clown-box");
    clownBox.appendChild(newFancyRect);
});

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    var r = randomNumber();
    var g = randomNumber();
    var b = randomNumber();
    return "rgb(" + r + "," + g + "," + b + ")";
}

function randomLinearGradient(angle = 90) {
    var c1 = randomColor();
    var c2 = randomColor();
    var c3 = randomColor();
    return "linear-gradient(" + angle + "deg," + c1 + "," c2 + "," c3 + ")";
}
