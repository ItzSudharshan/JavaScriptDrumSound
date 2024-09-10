const drumLength = document.querySelectorAll('.drum').length;

for (let i = 0; i < drumLength; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function(e) {
        makeNoise(this.innerHTML);
    });
}

function makeNoise(key) {
    switch (key) {
        case "w":
            const w1 = new Audio("Sounds/w.mp3");
            w1.play();
            break;
        case "a":
            const a1 = new Audio("Sounds/a1.mp3");
            a1.play();
            break;
        case "s":
            const s1 = new Audio("Sounds/s1.mp3");
            s1.play();
            break;
        case "d":
            const d1 = new Audio("Sounds/d1.mp3");
            d1.play();
            break;
        case "j":
            const j1 = new Audio("Sounds/j1.mp3");
            j1.play();
            break;
        case "k":
            const k1 = new Audio("Sounds/k1.mp3");
            k1.play();
            break;
        case "l":
            const l1 = new Audio("Sounds/l.mp3");
            l1.play();
            break;
    }
}

function animatingButtons(key){
    const activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 500);  // Corrected: added comma between the function and the delay
}
