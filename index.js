let homeScore = 0
let guestScore = 0
const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score") 
const resetEl = document.getElementById("reset-btn")

function increaceScore (team, score) {
    if(team === 'home') {
        homeScore += score
        homeScoreEl.textContent = homeScore
    }
    else if (team === 'guest'){
        guestScore += score
        guestScoreEl.textContent = guestScore
    }
    else {return}
    // Adding "lead" class to indicate the team leading
    if (homeScore > guestScore) {
        homeScoreEl.classList.add("lead")
        guestScoreEl.classList.remove("lead")
    }
    else if (homeScore < guestScore) {
        homeScoreEl.classList.remove("lead")
        guestScoreEl.classList.add("lead")
    }
    // Remove the "lead" class if the team's score is equal 
    else {
         homeScoreEl.classList.remove("lead")
         guestScoreEl.classList.remove("lead")
    }
}


//  RESET FUNCTION
function resetGameScore() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeScoreEl.classList.remove("lead")
    guestScoreEl.classList.remove("lead")
}
