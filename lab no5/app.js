let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let messageEl = document.getElementById("message");
let isFlipped = false;

function flipCard(userNumber) {
    if (!isFliped) {
        let kingNumber = Math.ceil(Math.random() * 3);
        if (kingNumber === 1) {
            img1.src = "./images/king-card.png";
            img2.src = "./images/joker-card.png";
            img3.src = "./images/joker-card.png";
        } else if (kingNumber === 2) {
            img1.src = "./images/joker-card.png";
            img2.src = "./images/king-card.png";
            img3.src = "./images/joker-card.png";
        } else if (kingNumber === 3) {
            img1.src = "./images/joker-card.png";
            img2.src = "./images/joker-card.png";
            img3.src = "./images/king-card.png";
        }
        isFliped = true;
        if (userNumber === kingNumber) {
            message.innerHTML = "You Won!"
            message.style.color = "green"
            message.style.fontSize = "64px"
        } else {
            message.innerHTML = "You lose!"
            message.style.color = "red"
            message.style.fontSize = "64px"
        }
    }
}

function reset() {
    img1.src = "./images/card-backside.png";
    img2.src = "./images/card-backside.png";
    img3.src = "./images/card-backside.png";
    isFliped = false;
    message.innerHTML = ""
}