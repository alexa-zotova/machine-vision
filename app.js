const canvas = document.querySelector("canvas");
canvas.width = 1920 ;
canvas.height = 4104;

const ctx = canvas.getContext("2d");

const img = document.createElement("img");
img.src = "dots_n_bunny.png";
let imgW = img.width / 6;
let imgH = img.height / 6;

let currentX = null;
let currentY = null;
let aimX = null;
let aimY = null;


document.addEventListener('mousemove', function(e) {
    aimX = e.pageX;
    aimY = e.pageY;
    
    if (currentX == null) {
        currentX = aimX;
        currentY = aimY;
    }

    draw();
});

function draw() {
    ctx.drawImage(img, currentX - imgW / 2 , currentY - imgH / 2, 421.0702, 600);
    currentX = currentX + (aimX - currentX) * 0.1;
    currentY = currentY + (aimY - currentY) * 0.1;

    requestAnimationFrame(draw);
}

draw();
