// step 1: comptuer generates a random number

// function computerNum() {
//     var comptuerGuessNum = Math.floor((Math.random() * 101) + 19);
//     document.getElementById("random-num").innerHTML = comptuerGuessNum;
// }

// $("#random-num").text(comptuerGuessNum);

// i tried the above method but did not work!!!
var randomResult;
var wins = 0;
var losses = 0;
var compNumber = Math.floor(Math.random() * 101) + 19;
var crystalValue = 0;
for(var i = 1; i < 5; i++) {
    var crystalGuessValue = Math.floor((Math.random() * 12) + 1);
    $("#crystal-btn-" + i).attr("value", crystalGuessValue);
}


$("#random-num").text(compNumber);

// step 2: When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
var userTotal = 0;

$(".crystal-btn").on("click", function(e){
    e.preventDefault();
    userTotal += parseInt($(this).val());
    console.log(userTotal);
    $("#your-score-num").text(userTotal);
    console.log(compNumber);
    if (userTotal === compNumber) {
        wins++;
        $("#wins").text(wins);
        gameReset();
    } else if (userTotal > compNumber) {
        losses++;
        $("#losses").text(losses);
        gameReset();
    }
});



function gameReset() {
    // have the compNumber change 
    compNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-num").text(compNumber);
    userTotal = 0;
    // assign crystals new values
    for(var i = 1; i < 5; i++) {
        var crystalGuessValue = Math.floor((Math.random() * 12) + 1);
        $("#crystal-btn-" + i).attr("value", crystalGuessValue);
    }
}



// var randomNum = 0;
// $("#your-score-num").text(randomNum);

//      * When they do click one, update the player's score counter.



// $("#your-score").text(crystalGuess);

// var totalScore = document.getElementById ("your-score-num");
// totalScore.textContent = crystalGuess;





// ### Option One: CrystalsCollector Game (Recommended)

// ![Crystal Collector](Images/1-CrystalCollector.jpg)

// 1. [Watch the demo](https://youtu.be/yNI0l2FMeCk).

// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.