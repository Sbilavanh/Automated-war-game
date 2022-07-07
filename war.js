function Deck() {
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

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function player(array) {
    let deck = [];
    for (let i = 1; i <= 26; i++) {
        deck.push(array.shift());
    }
    return deck;
}

function card(array) {
    return array.shift();
}

function play_war(arr, array) {
    let card = 26;
    let nyles_card = 0;
    let michael_card = 0;
    let nyles_score = 0;
    let michael_score = 0;
    while (card != 0) {
        nyles_card = arr.shift();
        michael_card = array.shift();
        if (nyles_card > michael_card) {
            console.log("nyles won the battle and recieved a point");
            nyles_score++;
        }
        else if (nyles_card < michael_card) {
            console.log("michael won the battle and recieved a point");
            michael_score++;
        }
        else {
            console.log("both players tied and recieved nothing!");
        }
        card--;
    }
    console.log("nyles score: " + nyles_score + " michael score: " + michael_score);
    if (nyles_score > michael_score) {
        console.log("nyles won the war");
    }
    else if (nyles_score < michael_score) {
        console.log(" michael won the war");
    }
    else {
        console.log("both players tied");
    }
    return 1;
}

let deck = (shuffle(Deck()));
let player_nyles = player(deck);
let player_michael = player(deck);
play_war(player_nyles, player_michael);

console.log("nyles score: " + nyles_score + " michael score: " + michael_score);
