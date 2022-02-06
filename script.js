let cardAmount = null;
let movesCounter = 0;
let correctPairsCounter = null;


function askCardAmount() {
    cardAmount = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 à 14)"));

    while (cardAmount % 2 !== 0 || cardAmount < 4 || cardAmount > 14) {
        cardAmount = parseInt(prompt("Quantas cartas você deseja? (números pares de 4 à 14)"));
    }
}

let cardContainerFirstClassName = null;
let cardContainerSecondClassName = null;
let cardContainerFirst = null;
let cardContainerSecond = null;

function cardRotation(element) {
    element.classList.add("rotate");
    movesCounter++;
    pairsCardsTest(element);
    setTimeout(rotateWrongPairCards, 1000);
    setTimeout(finalGameAlertMessage, 100);
}

function pairsCardsTest(element) {

    if (movesCounter % 2 !== 0) {
        cardContainerFirst = (element.querySelector(".back-face img"));
        cardContainerFirstClassName = cardContainerFirst.className;
    }

    else {
        cardContainerSecond = (element.querySelector(".back-face img"));
        cardContainerSecondClassName = cardContainerSecond.className;
    }

    if (cardContainerSecondClassName === cardContainerFirstClassName && cardContainerSecond !== null && cardContainerFirst !== null) {
        console.log("Acertou");
        cardContainerFirst = null;
        cardContainerSecond = null;
        correctPairsCounter++;
    }
}

function rotateWrongPairCards() {

    if (cardContainerSecondClassName !== cardContainerFirstClassName && cardContainerSecond !== null && cardContainerFirst !== null) {
        cardContainerFirst.parentNode.parentNode.classList.remove("rotate");
        cardContainerSecond.parentNode.parentNode.classList.remove("rotate");
        cardContainerFirst = null;
        cardContainerSecond = null;
    }
}

function finalGameAlertMessage() {

    if (correctPairsCounter === cardAmount / 2) {
        alert(`Você ganhou em ${movesCounter} jogadas!`)
    }
    reloadGameFunction()

}


let parrotsGifs = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
parrotsGifs.sort(randomNumber);


function randomNumber() {
    return Math.random() - 0.5;
}



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
    sorterCardAmount(cardAmount);
    for (let i = 0; i < cardAmount; i++) {
        cardsContainer.innerHTML += ` 
        <div class="card" onclick="cardRotation(this)">
            <div class="front-face face">
                <img src="Parrots Gifs/front.png" alt="Frente da Carta">
            </div>

            <div class="back-face face">
                <img class= "${parrotsGifs[(sorter[i])]}" src="Parrots Gifs/${parrotsGifs[(sorter[i])]}" alt="unicorn parrot">
            </div>
        </div>`

    }

}

function reloadGameFunction() {
    let reloadGameQuestion = null;
    if (correctPairsCounter === cardAmount / 2) {
        reloadGameQuestion = prompt("Quer jogar novamente? (Digite 's' ou 'n')")
    }

    if (reloadGameQuestion === "s") {
        location.reload();
    }
    else if (reloadGameQuestion === "n") { window.close() }
}



askCardAmount();
addCardToScreen();