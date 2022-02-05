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

let parrotsGifs = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
parrotsGifs.sort(randomNumber);


function randomNumber() {
    return Math.random() - 0.5;
}


let randoArrayNumber = [];
let sorter = []; // para ver no console
function sorterCardAmount(amount) {
    for (let i = 0; i < amount / 2; i++) {
        sorter.push(i);
    }
    for (let i = 0; i < amount / 2; i++) {
        sorter.push(i);
    }

    sorter.sort(randomNumber);
}


function addCardToScreen() {
    const cardsContainer = document.querySelector(".cards");
    sorterCardAmount(cardAmount)
    for (let i = 0; i < cardAmount; i++) {
        cardsContainer.innerHTML += ` 
        <div class="card" onclick="cardRotation(this)">
            <div class="front-face face">
                <img src="Parrots Gifs/front.png" alt="Frente da Carta">
            </div>

            <div class="back-face face">
                <img src="Parrots Gifs/${parrotsGifs[(sorter[i])]}" alt="unicorn parrot">
            </div>
        </div>`

    }

}





askCardAmount();
addCardToScreen();