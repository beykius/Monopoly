"use strict";
const arr = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12],
    [35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13],
    [34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14],
    [33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15],
    [32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16],
    [31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17],
    [30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18],
    [29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19],
];
const cards = [
    {
        "name": "GO",
        "type": "special",
        "description": "Collect $200 when you pass."
    },
    {
        "name": "Mediterranean Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Community Chest",
        "type": "special",
        "description": "Draw a Community Chest card."
    },
    {
        "name": "Baltic Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [4, 20, 60, 180, 320, 450],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Income Tax",
        "type": "tax",
        "amount": 200
    },
    {
        "name": "Reading Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Oriental Avenue",
        "type": "property",
        "color": "lightblue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card."
    },
    {
        "name": "Vermont Avenue",
        "type": "property",
        "color": "lightblue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Connecticut Avenue",
        "type": "property",
        "color": "lightblue",
        "price": 120,
        "rent": [8, 40, 100, 300, 450, 600],
        "houseCost": 50,
        "hotelCost": 50
    },
    {
        "name": "Jail",
        "type": "special",
        "description": "Just visiting or in jail."
    },
    {
        "name": "St. Charles Place",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Electric Company",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10]
    },
    {
        "name": "States Avenue",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Virginia Avenue",
        "type": "property",
        "color": "pink",
        "price": 160,
        "rent": [12, 60, 180, 500, 700, 900],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "St. James Place",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Tennessee Avenue",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "New York Avenue",
        "type": "property",
        "color": "orange",
        "price": 200,
        "rent": [16, 80, 220, 600, 800, 1000],
        "houseCost": 100,
        "hotelCost": 100
    },
    {
        "name": "Free Parking",
        "type": "special",
        "description": "No action."
    },
    {
        "name": "Kentucky Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Indiana Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Illinois Avenue",
        "type": "property",
        "color": "red",
        "price": 240,
        "rent": [20, 100, 300, 750, 925, 1100],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card."
    },
    {
        "name": "B&O Railroad",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Atlantic Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Ventnor Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Water Works",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10]
    },
    {
        "name": "Marvin Gardens",
        "type": "property",
        "color": "yellow",
        "price": 280,
        "rent": [24, 120, 360, 850, 1025, 1200],
        "houseCost": 150,
        "hotelCost": 150
    },
    {
        "name": "Go to Jail",
        "type": "special",
        "description": "Move directly to Jail. Do not pass GO, do not collect $200."
    },
    {
        "name": "Pacific Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "North Carolina Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Pennsylvania Avenue",
        "type": "property",
        "color": "green",
        "price": 320,
        "rent": [28, 150, 450, 1000, 1200, 1400],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Short Line",
        "type": "railroad",
        "price": 200,
        "rent": [25, 50, 100, 200]
    },
    {
        "name": "Park Place",
        "type": "property",
        "color": "darkblue",
        "price": 350,
        "rent": [35, 175, 500, 1100, 1300, 1500],
        "houseCost": 200,
        "hotelCost": 200
    },
    {
        "name": "Luxury Tax",
        "type": "tax",
        "amount": 100
    },
    {
        "name": "Boardwalk",
        "type": "property",
        "color": "darkblue",
        "price": 400,
        "rent": [50, 200, 600, 1400, 1700, 2000],
        "houseCost": 200,
        "hotelCost": 200
    }
];
const gameBoard = document.getElementById("game-board");
const money = document.querySelectorAll('.money');
const message = document.querySelectorAll('.message');
const buttonsForBuying = document.querySelectorAll('.button-81');
const playerOneCards = document.querySelector('.player-one-cards');
const playerTwoCards = document.querySelector('.player-two-cards');
const buttonHouse = document.querySelectorAll('.button-81');
let playerOneMoney = 1500;
let playerTwoMoney = 5000;
let playerOneOwnedCards = [];
let playerTwoOwnedCards = [];
const cardsWithIndex = cards.map((card, index) => (Object.assign(Object.assign({}, card), { index })));
// Create Cards
const createCard = (card) => {
    const cardElement = document.createElement("div");
    cardElement.id = `card-${card.index}`;
    cardElement.className = "monopoly-card";
    let content = `<div class="card-header">${card.name}</div>`;
    content += `<div class="card-content">`;
    if (card.type === "property") {
        content += `<p class="price">Price $${card.price}</p>`;
    }
    else if (card.type === "special" || card.type === "tax") {
        if (card.name === "Community Chest") {
            content += `<img src="https://i.pinimg.com/originals/aa/98/84/aa98846a483c4de09ea31b9c1e3fd8a1.gif" alt="word">`;
        }
        if (card.name === "Chance") {
            content += `<img src="https://www.pngkit.com/png/full/227-2275009_monopoly-chance-question-mark.png" alt="word">`;
        }
        if (card.type === "tax") {
            content += `<p>Pay $${card.amount}</p>`;
            content += `<img src="https://www.funnyshirts.net/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/b/a/base-monopoly--luxury-tax-womens-classic-tshirt.png" alt="word">`;
        }
        if (card.name === "Go to Jail") {
            content += `<img src="https://www.pngkey.com/png/full/227-2275140_banner-download-swiss-go-to-monopoly-go-to.png" alt="word">`;
        }
        if (card.name === "GO") {
            content += `<img src="https://preview.redd.it/could-someone-make-this-sign-say-ve-con-dios-for-my-silly-v0-cfi8b3dccctb1.gif?format=png8&s=b251a49cf52bad8843a2c0157de1ffcac045b348" alt="word">`;
        }
        if (card.name === "Jail") {
            content += `<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/211150c9-41cd-4ca6-b441-319618afe9bb/df2s8zo-23726de2-3dd8-45b6-8b34-ec8ddead8a38.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIxMTE1MGM5LTQxY2QtNGNhNi1iNDQxLTMxOTYxOGFmZTliYlwvZGYyczh6by0yMzcyNmRlMi0zZGQ4LTQ1YjYtOGIzNC1lYzhkZGVhZDhhMzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OZ9i6OoAFqa5iV2MHsnRPOKKu9j558hIOuYXO802uts" alt="word">`;
        }
        if (card.name === "Free Parking") {
            content += `<img src="https://monopolyleeds.com/wp-content/uploads/2024/04/Parking.png" alt="word">`;
        }
    }
    else if (card.type === "railroad") {
        content += `<p>Price: $${card.price}</p>`;
        content += `<img src="https://i.pinimg.com/originals/e3/f7/0e/e3f70e61d6861c718137a686a979a950.gif" alt="word">`;
    }
    else if (card.type === "utility") {
        content += `<p>Price: $${card.price}</p>`;
        if (card.name === "Water Works") {
            content += `<img src="https://clipart-library.com/data_images/260425.gif" alt="word">`;
        }
    }
    content += `</div>`;
    cardElement.innerHTML = content;
    const cardHeader = cardElement.querySelector(".card-header");
    if (card.color) {
        cardHeader.style.setProperty("background-color", card.color, "important");
    }
    return cardElement;
};
arr.forEach((row) => {
    row.forEach((cell) => {
        if (cell > 0 && cell <= cards.length) {
            const card = cardsWithIndex[cell - 1];
            const cardElement = createCard(card);
            gameBoard.appendChild(cardElement);
        }
        else {
            const emptySpace = document.createElement("div");
            emptySpace.className = "empty-space";
            gameBoard.appendChild(emptySpace);
        }
    });
});
function createPeople() {
    const playerOne = document.createElement("div");
    const playerTwo = document.createElement("div");
    playerOne.className = "player-one";
    playerTwo.className = "player-two";
    const firstCard = document.getElementById("card-0");
    if (firstCard) {
        firstCard.appendChild(playerOne);
        firstCard.appendChild(playerTwo);
    }
}
createPeople();
let currentPlayer = 1;
let playerPositions = [0, 0];
// Move player
function movePlayer(player, rollDice) {
    const currentCard = document.getElementById(`card-${playerPositions[player]}`);
    const playerElements = [
        document.querySelector('.player-one'),
        document.querySelector('.player-two'),
    ];
    let playerElement;
    if (player === 0) {
        playerElement = playerElements[0];
    }
    else {
        playerElement = playerElements[1];
    }
    if (currentCard && playerElement) {
        currentCard.removeChild(playerElement);
    }
    // Move the player
    playerPositions[player] = (playerPositions[player] + rollDice) % cards.length;
    const newCard = document.getElementById(`card-${playerPositions[player]}`);
    if (newCard && playerElement) {
        newCard.appendChild(playerElement);
    }
    //Player has to pay
    const landedCard = cards[playerPositions[player]];
    if (landedCard.type === "tax" && typeof landedCard.amount === "number") {
        if (player === 0) {
            playerOneMoney -= landedCard.amount;
            message[0].innerText = `You just paid ${landedCard.amount}$`;
        }
        else {
            playerTwoMoney -= landedCard.amount;
            message[1].innerText = `You just paid ${landedCard.amount}$`;
        }
        updatePlayerMoneyDisplay();
    }
    else {
        message[0].innerText = '';
        message[1].innerText = '';
    }
    //Player can buy
    if (landedCard.type === "property" || landedCard.type === "railroad" || landedCard.type === "utility") {
        const isOwnedByPlayer1 = playerOneOwnedCards.some(card => card.name === landedCard.name);
        const isOwnedByPlayer2 = playerTwoOwnedCards.some(card => card.name === landedCard.name);
        if (isOwnedByPlayer1 || isOwnedByPlayer2) {
            const owner = isOwnedByPlayer1 ? "Player 1" : "Player 2";
            const rentArray = landedCard.rent;
            //@ts-ignore
            let rentAmount = rentArray[0];
            //@ts-ignore
            console.log('rent money:', rentArray[1]);
            // Pay rent logic
            if (currentPlayer === 1) {
                message[0].innerText = `${landedCard.name} is already owned by ${owner}. You need to pay $${rentAmount} rent.`;
                playerOneMoney -= rentAmount;
                playerTwoMoney += rentAmount;
                updateTurnStatus();
                if (isOwnedByPlayer1) {
                    message[0].innerText = `You own this property.`;
                }
                else {
                    playerTwoMoney += rentAmount;
                }
            }
            else if (currentPlayer === 2) {
                message[1].innerText = `${landedCard.name} is already owned by ${owner}. You need to pay $${rentAmount} rent.`;
                playerTwoMoney -= rentAmount;
                playerOneMoney += rentAmount;
                updateTurnStatus();
                if (isOwnedByPlayer2) {
                    message[1].innerText = `You own this property.`;
                }
                else {
                    //@ts-ignore
                    playerOneMoney += landedCard.rent[1];
                }
            }
            buttonsForBuying[0].classList.add("d-none");
            buttonsForBuying[2].classList.add("d-none");
            updatePlayerMoneyDisplay();
            return;
        }
        const playerMoney = currentPlayer === 1 ? playerOneMoney : playerTwoMoney;
        if (landedCard.price && landedCard.price <= playerMoney) {
            // Player 1 turn
            if (currentPlayer === 1) {
                message[0].innerText = `Do you want to buy ${landedCard.name}? Price: ${landedCard.price}$`;
                buttonsForBuying[0].classList.remove("d-none");
                buttonsForBuying[2].classList.add("d-none");
                buttonsForBuying[0].onclick = function () {
                    const cardElement = createCard(landedCard);
                    playerOneOwnedCards.push(landedCard);
                    message[0].innerText = `Congratulations! You just bought ${landedCard.name} for ${landedCard.price}$`;
                    //@ts-ignore
                    playerOneMoney -= landedCard.price;
                    playerOneCards.appendChild(cardElement);
                    buttonsForBuying[0].classList.add("d-none");
                    updatePlayerMoneyDisplay();
                    canBuyBuildingFirstPlayer();
                    groupPlayerOneCardsByColor();
                };
            }
            // Player 2 turn
            else if (currentPlayer === 2) {
                message[1].innerText = `Do you want to buy ${landedCard.name}? Price: ${landedCard.price}$`;
                buttonsForBuying[2].classList.remove("d-none");
                buttonsForBuying[0].classList.add("d-none");
                buttonsForBuying[2].onclick = function () {
                    const cardElement = createCard(landedCard);
                    playerTwoOwnedCards.push(landedCard);
                    message[1].innerText = `Congratulations! You just bought ${landedCard.name} for ${landedCard.price}$`;
                    //@ts-ignore
                    playerTwoMoney -= landedCard.price;
                    playerTwoCards.appendChild(cardElement);
                    buttonsForBuying[2].classList.add("d-none");
                    updatePlayerMoneyDisplay();
                    canBuyBuildingSecondPlayer();
                    groupPlayerTwoCardsByColor();
                };
            }
        }
        else {
            message[0].innerText = '';
            message[1].innerText = '';
            updatePlayerMoneyDisplay();
        }
    }
    console.log('Player:', player);
    console.log('Player element:', playerElement);
    console.log('Removing from', currentCard);
    console.log('Appending to', newCard);
    console.log('Updated player positions:', playerPositions);
}
function canBuyBuildingFirstPlayer() {
    if (playerOneOwnedBrownCards.length >= 2) {
        buyHouse();
    }
    if (playerOneOwnedLightBlueCards.length >= 3) {
        buyHouse();
    }
    if (playerOneOwnedPinkCards.length >= 3) {
        buyHouse();
    }
    if (playerOneOwnedOrangeCards.length >= 3) {
        buyHouse();
    }
    if (playerOneOwnedRedCards.length >= 3) {
        buyHouse();
    }
    if (playerOneOwnedYellowCards.length >= 3) {
        buyHouse();
    }
    if (playerOneOwnedGreenCards.length >= 3) {
        buyHouse();
    }
    if (playerOneOwnedBlueCards.length >= 3) {
        buyHouse();
    }
}
function canBuyBuildingSecondPlayer() {
    if (playerTwoOwnedBrownCards.length >= 2) {
        buyHouseTwo();
    }
    if (playerTwoOwnedLightBlueCards.length >= 3) {
        buyHouseTwo();
    }
    if (playerTwoOwnedPinkCards.length >= 3) {
        buyHouseTwo();
    }
    if (playerTwoOwnedOrangeCards.length >= 3) {
        buyHouseTwo();
    }
    if (playerTwoOwnedRedCards.length >= 3) {
        buyHouseTwo();
    }
    if (playerTwoOwnedYellowCards.length >= 3) {
        buyHouseTwo();
    }
    if (playerTwoOwnedGreenCards.length >= 3) {
        buyHouseTwo();
    }
    if (playerTwoOwnedBlueCards.length >= 3) {
        buyHouseTwo();
    }
}
function buyHouse() {
    buttonHouse[1].classList.remove("d-none");
    buttonHouse[1].onclick = function () {
        const currentCard = document.getElementById(`card-${playerPositions[0]}`);
        const houseElement = document.createElement("div");
        houseElement.innerHTML = '🏠';
        buttonHouse[1].classList.add("d-none");
        if (currentCard) {
            currentCard.appendChild(houseElement);
        }
        console.log("House added at position:", playerPositions[0]);
    };
}
function buyHouseTwo() {
    buttonHouse[3].classList.remove("d-none");
    buttonHouse[3].onclick = function () {
        const currentCard = document.getElementById(`card-${playerPositions[0]}`);
        const houseElement = document.createElement("div");
        houseElement.innerHTML = '🏠';
        buttonHouse[3].classList.add("d-none");
        if (currentCard) {
            currentCard.appendChild(houseElement);
        }
        console.log("House added at position:", playerPositions[0]);
    };
}
let playerOneOwnedBrownCards = [];
let playerOneOwnedLightBlueCards = [];
let playerOneOwnedPinkCards = [];
let playerOneOwnedOrangeCards = [];
let playerOneOwnedRedCards = [];
let playerOneOwnedYellowCards = [];
let playerOneOwnedGreenCards = [];
let playerOneOwnedBlueCards = [];
let playerTwoOwnedBrownCards = [];
let playerTwoOwnedLightBlueCards = [];
let playerTwoOwnedPinkCards = [];
let playerTwoOwnedOrangeCards = [];
let playerTwoOwnedRedCards = [];
let playerTwoOwnedYellowCards = [];
let playerTwoOwnedGreenCards = [];
let playerTwoOwnedBlueCards = [];
function groupPlayerOneCardsByColor() {
    playerOneOwnedBrownCards = [];
    playerOneOwnedLightBlueCards = [];
    playerOneOwnedPinkCards = [];
    playerOneOwnedOrangeCards = [];
    playerOneOwnedRedCards = [];
    playerOneOwnedYellowCards = [];
    playerOneOwnedGreenCards = [];
    playerOneOwnedBlueCards = [];
    playerOneOwnedCards.forEach(card => {
        switch (card.color) {
            case "brown":
                playerOneOwnedBrownCards.push(card);
                break;
            case "lightblue":
                playerOneOwnedLightBlueCards.push(card);
                break;
            case "pink":
                playerOneOwnedPinkCards.push(card);
                break;
            case "orange":
                playerOneOwnedOrangeCards.push(card);
                break;
            case "red":
                playerOneOwnedRedCards.push(card);
                break;
            case "yellow":
                playerOneOwnedYellowCards.push(card);
                break;
            case "green":
                playerOneOwnedGreenCards.push(card);
                break;
            case "blue":
                playerOneOwnedBlueCards.push(card);
                break;
        }
    });
}
function groupPlayerTwoCardsByColor() {
    playerTwoOwnedBrownCards = [];
    playerTwoOwnedLightBlueCards = [];
    playerTwoOwnedPinkCards = [];
    playerTwoOwnedOrangeCards = [];
    playerTwoOwnedRedCards = [];
    playerTwoOwnedYellowCards = [];
    playerTwoOwnedGreenCards = [];
    playerTwoOwnedBlueCards = [];
    playerTwoOwnedCards.forEach(card => {
        switch (card.color) {
            case "brown":
                playerTwoOwnedBrownCards.push(card);
                break;
            case "lightblue":
                playerTwoOwnedLightBlueCards.push(card);
                break;
            case "pink":
                playerTwoOwnedPinkCards.push(card);
                break;
            case "orange":
                playerTwoOwnedOrangeCards.push(card);
                break;
            case "red":
                playerTwoOwnedRedCards.push(card);
                break;
            case "yellow":
                playerTwoOwnedYellowCards.push(card);
                break;
            case "green":
                playerTwoOwnedGreenCards.push(card);
                break;
            case "blue":
                playerTwoOwnedBlueCards.push(card);
                break;
        }
    });
}
// Update Player Money Display
function updatePlayerMoneyDisplay() {
    money[0].innerText = `Money: ${playerOneMoney} $`;
    money[1].innerText = `Money: ${playerTwoMoney} $`;
    gameOver();
}
// Roll Dice function
function rollDice() {
    const diceButtons = document.querySelectorAll('.roll-dice');
    diceButtons.forEach((button, index) => {
        button.disabled = index + 1 !== currentPlayer;
        const placeholders = [
            document.getElementById(`placeholder`),
            document.getElementById(`placeholder-one`),
        ];
        button.onclick = function () {
            if (currentPlayer === index + 1) {
                const dice = Math.floor(Math.random() * 6) + 1;
                placeholders.forEach((placeholder, i) => {
                    if (placeholder) {
                        placeholder.innerHTML = i === index ? `Rolled: ${dice}` : '';
                    }
                });
                movePlayer(index, dice);
                currentPlayer = currentPlayer === 1 ? 2 : 1;
                updateTurnStatus();
            }
        };
    });
}
// Update Turn Status
function updateTurnStatus() {
    const diceButtons = document.querySelectorAll('.roll-dice');
    diceButtons.forEach((button, index) => {
        button.disabled = index + 1 !== currentPlayer;
    });
}
// Game Over
function gameOver() {
    if (playerOneMoney <= 0 || playerTwoMoney <= 0) {
        alert('Game Over');
    }
}
rollDice();
updateTurnStatus();
