let cardAmount = null;
function askCardAmount() {
    cardAmount = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 à 14)"));

    while (cardAmount % 2 !== 0 || cardAmount < 4 || cardAmount > 14) {
        cardAmount = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 à 14)"));
    }
}

function cardRotation(element) {
    element.classList.add("rotate");
}

function addCardToScreen(cardAmount) {
    const cardsContainer = document.querySelector(".cards");
    for (let i = 0; i < cardAmount; i++) {
        cardsContainer.innerHTML += ` 
    <div class="card" onclick="cardRotation(this)">
        <div class="front-face face">
            <img src="Parrots Gifs/front.png" alt="Frente da Carta">
        </div>

        <div class="back-face face">
            <img src="Parrots Gifs/unicornparrot.gif" alt="unicorn parrot">
        </div>
    </div>
    <div class="`
    }
}



askCardAmount();
addCardToScreen(cardAmount);