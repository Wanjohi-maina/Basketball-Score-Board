let homeScore = 0
let guestScore = 0
const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score") 
const resetEl = document.getElementById("reset-btn")

//  HOME FUNCTION
function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}


function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

//  GUEST FUNCTION
function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

//  RESET FUNCTION
function resetGameScore() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}
