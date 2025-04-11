let currentNumber = 1;

document.addEventListener("DOMContentLoaded", () => {
    addGlowEffect();
});

function setButtonText(button) {
    const random = document.querySelector(".random"); 
    const guidanceText = document.querySelector(".guidence-text");
    const guidanceText2 = document.querySelector(".guidence-text2");

    if (button.textContent.trim() === "") {
        button.textContent = currentNumber;

        currentNumber++;

        button.disabled = true;

        if (currentNumber > 25) {
            random.style.display = "none"; 
            guidanceText.textContent = "Now the game is started";
            guidanceText2.textContent = "You can able to make strikes on the numbers";
            addGlowEffect(); 
            console.log("All numbers have been assigned.");
        }
    }
}

function randomReset() {
    const random = document.querySelector(".random"); 
    const buttons = document.querySelectorAll(".bingo-button");
    const guidanceText = document.querySelector(".guidence-text");
    const guidanceText2 = document.querySelector(".guidence-text2");
    const numbers = Array.from({ length: 25 }, (_, i) => i + 1); 

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    currentNumber = 1; 
    buttons.forEach((button, index) => {
        button.textContent = numbers[index];
        button.disabled = false; 
        currentNumber++;
        if (currentNumber > 25) {
            random.style.display = "none"; 
            guidanceText.textContent = "Now the game is started";
            guidanceText2.textContent = "You can able to make strikes on the numbers";
            addGlowEffect();
            console.log("All numbers have been assigned.");
        }
    });
    
}

function addGlowEffect() {
    const firstButton = document.querySelector(".bingo-button");
    firstButton.classList.add("glow");

    firstButton.addEventListener("click", () => {
        firstButton.classList.remove("glow");
    });
}