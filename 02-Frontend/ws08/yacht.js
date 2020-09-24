$(document).ready(function(){
var playedRounds = 0,
    selectFlag = false;
// Check for game over
var isGameOver = function() {}
// Resets to new game
$("#resetgame").click( function() {
});

/******************* Dice *************************/ 
var dice = new Array(5).fill(0),
    diceFixed = new Array(5).fill(false),
    throwNumber = 0;
// Resets dice for new roll
var diceReset = function(){}
// Toggling of dice
$(".dice").click( function(){
});
// Rolls the dice
$("#rollbutton").click( function() {
    
});

/*************************** Score ********************************/
var scored = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1], // 12 scores
    total = 0;
// Resets score for new game
var scoreReset = function () {}
// Sums the dice of the matching value
var scoreSame = function(match) {}
$(".scoresame").click( function(){
    var idx = $(this).index('.scoresame');
    var score = scoreSame(idx + 1);
    setScored(idx, score);
});
// Returns the score of dice for four of a kind and full house
var scoreKind = function(fourKind) {
    var firstCount = {value: 0, count: 1},
        secondCount = {value: 0, count: 0},
        sum = dice[0];
}
$(".scorekind").click(function (){
    var idx = $(this).index('.scorebutton');
    var score = scoreKind(idx-6);
    setScored(idx, score);
});
// Returns score of the dice for straights
var scoreStraight = function(big) {}
$(".scorestraight").click(function () {
});
// Returns the score for choice
var scoreChoice = function() {}
// User selects choice category
$(".scorechoice").click(function (){
});
// Returns score for yacht category
var scoreYacht = function() {}
// User selects yacht category
$(".scoreyacht").click(function (){
});
// Sets the total score
var scoreTotal = function() {}
// Helper function to reset dice and other checks when user selects a category
var setScored = function(index, score) {}
var showScores = function() {
    $(".score").each(function(idx){
        if (scored[idx] < 0) {
            var score = 0;
            switch (idx) {
                case 6:
                    score = scoreKind(0);
                    break;
                case 7:
                    score = scoreKind(1);
                    break;
                case 8:
                    score = scoreStraight(0);
                    break;
                case 9:
                    score = scoreStraight(1);
                    break;
                case 10:
                    score = scoreChoice();
                    break;
                case 11:
                    score = scoreYacht();
                    break;
                default:
                    score = scoreSame(idx+1);
                    break;
            }
            this.innerHTML = score;
        } else {
            this.innerHTML = scored[idx];
        }
    });
}

});
