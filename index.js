// create variable; displayScore
let homeScore = 0
let guestScore = 0
let homeDisplayScore = document.getElementById("home-score")
let guestDisplayScore = document.getElementById("guest-score")
let resetButton = document.getElementById("r-btn")

// set displayScore to zero

// Select buttons on the page by ID

// - -------------------------------------------- Home

function increaseByOne(){
    homeScore = homeScore + 1;
    homeDisplayScore.innerText = homeScore;
}

function increaseByTwo(){
    homeScore = homeScore + 2;
    homeDisplayScore.innerText = homeScore;
}

function increaseByThree(){
    homeScore = homeScore + 3;
    homeDisplayScore.innerText = homeScore;
}

// - -------------------------------------------- Guest

function increaseByOneGuest(){
    guestScore = guestScore + 1;
    guestDisplayScore.innerText = guestScore;
}

function increaseByTwoGuest(){
    guestScore = guestScore + 2;
    guestDisplayScore.innerText = guestScore;
}

function increaseByThreeGuest(){
    guestScore = guestScore + 3;
    guestDisplayScore.innerText = guestScore;
}
// create functions for adding score; +1, +2, +3
// add functions to the onclick attribute in HTML

function resetScore(){
    homeScore = 0;
    guestScore = 0;
    homeDisplayScore.innerText = 0;
    guestDisplayScore.innerText = 0;
}
