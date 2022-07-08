function Deck() {  //this creates the 52 card deck used to play war
    let deck = [];
    let count = 1;
    for (let i = 1; count <= 4; i++) {
        deck.push(i);
        if (i === 13) {
            i = 0;
            count++;
        }
    }
    return deck;
}

function shuffle(array) {    // this function is to shuffle the cards randomly to be prepared to be dealt to each player
    let currentIndex = array.length;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function player(array) {   // this function is used to deal 26 cards to the 2 players in the game
    let deck = [];
    for (let i = 1; i <= 26; i++) {
        deck.push(array.shift());
    }
    return deck;
}

function card(array) {      // this takes the deck array .shift takes the first element of the array (the card) then removes it from the array
    return array.shift();
}

function play_war(arr, array) {  // this function is where the game starts once you run the code on live server
    let card = 26;
    let moch_card = 0;
    let yu_card = 0;
    let moch_score = 0;
    let yu_score = 0;
    while (card != 0) {
        moch_card = arr.shift();
        yu_card = array.shift();
        if (moch_card > yu_card) {
            console.log("Moch won the battle and recieved a point");
            moch_score++;
        }
        else if (moch_card < yu_card) {
            console.log("Yu won the battle and recieved a point");
            yu_score++;
        }
        else {
            console.log("both players tied and recieved nothing!");
        }
        card--;
    }
    console.log("Moch score: " + moch_score + " Yu score: " + yu_score);
    if (moch_score > yu_score) {
        console.log("Moch won the war");
    }
    else if (moch_score < yu_score) {
        console.log(" Yu won the war");
    }
    else {
        console.log("both players tied");
    }
    return 1;
}

let deck = (shuffle(Deck()));
let player_moch = player(deck);
let player_yu = player(deck);
play_war(player_moch, player_yu);

console.log("Moch score: " + moch_score + " Yu score: " + yu_score);
