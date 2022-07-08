
const buttonColors=["red","blue","green","yellow"]; 
var gamePattern =[];
var userClickedPattern = [];
var  randomNumber;
var randomChosenColor;
var started = false;
var level = 0;

// function to detect keypress to start the game. 
$(document).keypress(function(){
  //to detect the game has just started 
  if(!started)
  {
    //to change the level heading to current level 
    $("#level-title").text("Level " + level );
    nextSequence();
    //to state that game has already started 
    started = true;
  }
  
});

//to match the game patttern to the user pattern
function checkAnswer(currentLevel){

if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
console.log("sucess");
if(userClickedPattern.length === gamePattern.length) {
  setTimeout(function(){
    nextSequence();
  },1000);
}
}
else{
console.log("wrong");
$("h1").text("Game Over, Press Any Key to Restart!");
playSound("wrong");
$("body").addClass("game-over");
setTimeout(function(){
$("body").removeClass("game-over");
},200);
startOver();
}
}

//to detect the buttion clicked by user
$(".btn").click(function(){
  var userChosenColor;
   userChosenColor =$(this).attr("id"); 
   userClickedPattern.push(userChosenColor);
   playSound(userChosenColor);
   animatePress(userChosenColor);
   checkAnswer(userClickedPattern.length - 1);
  });
  

 // to autimatically fill game pattern array 
function nextSequence(){

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level );
 

  randomNumber= Math.floor((Math.random() * 4));
  randomChosenColor= buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  
  
}

//to add sound
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//to add animated effect
function animatePress(currentColor){

 $("#" + currentColor).addClass("pressed"); 
 setTimeout(function(){
$("#"+ currentColor).removeClass("pressed");
 },100);
}

//to restart the game after user has lost. 
function startOver(){
level = 0;
started = false;
gamePattern = [];
}












// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });


// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

//       console.log("success");

//       if (userClickedPattern.length === gamePattern.length){

//         setTimeout(function () {
//           nextSequence();
//         }, 1000);

//       }

//     } else {
//       var wrong = new Audio("sounds/wrong.mp3");
//       wrong.play();

//       $("body").addClass("game-over");
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);
      
//       $("h1").text("Game Over, Press Any Key to Restart");

//       startOver();
//     }

// }

// function startOver(){
//   started = false;
//   gamePattern = [];
//   level=0;
// }

// function nextSequence() {

//   userClickedPattern = [];

//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }



