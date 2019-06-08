//gets a random number between 120 and 19.
var getRandomNumber = function() {
    var x = document.getElementById("number-box")
    x.innerHTML = Math.floor((Math.random() * 120) + 19);
    return x.innerHTML;
  }
//variables go here
var randomNumber = getRandomNumber();
var numberArray = Array();
var addedNumberValue = 0;
var addedNumberElement = document.getElementById("added-numbers");
var losses = 0;
var lossesElement = document.getElementById("loss-count");
var wins = 5;
var winsElement = document.getElementById("win-count");
var crystal1Info = document.getElementById("crystal1-info");
var crystal2Info = document.getElementById("crystal2-info");
var crystal3Info = document.getElementById("crystal3-info");
var crystal4Info = document.getElementById("crystal4-info");
var hasBeenClicked = 0;
//gets a random number between 12 and 1, then pushes the value to numberArray, 4 times
var randomCrystalValue = function() {
  for (var i = 0; i < 4; i++) {
  var selectedNumber = Math.floor((Math.random() * 12) + 1)
  while (numberArray.includes(selectedNumber)) {
    selectedNumber = Math.floor((Math.random() * 12) + 1)
  }
  numberArray.push(selectedNumber);
  console.log(numberArray[i])
}};

randomCrystalValue();



console.log("addedNumberValue = " + addedNumberValue); 
console.log("randomNumber = " + randomNumber); 



//on click events for the buttons
$("#crystal1").on("click", function() {
  
});
$("#crystal2").on("click", function() {
  
});
$("#crystal3").on("click", function() {
  
});
$("#crystal4").on("click", function() {
  
});
$("#crystal5").on("click", function() {
  $("#crystal5").fadeOut();
  crystal1Info.innerHTML = numberArray[0];
  $("#crystal1-info").show().delay(3000).fadeOut();

  crystal2Info.innerHTML = numberArray[1];
  $("#crystal2-info").show().delay(3000).fadeOut();

  crystal3Info.innerHTML = numberArray[2];
  $("#crystal3-info").show().delay(3000).fadeOut();

  crystal4Info.innerHTML = numberArray[3];
  $("#crystal4-info").show().delay(3000).fadeOut();
});
$(".crystal").on("click", function() {
  hasBeenClicked = hasBeenClicked + 1;
  var numberValue = numberArray[3];
  addedNumberValue = addedNumberValue + numberValue;
  addedNumberElement.innerHTML = addedNumberValue;
  if (addedNumberValue > randomNumber){
    losses = losses + 1;
    lossesElement.innerHTML = losses + " time(s)";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  };
  if (addedNumberValue == randomNumber) {
    wins = wins + 1;
    winsElement.innerHTML = wins + " time(s)";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
  if (wins % 5 === 0 && wins > 0) {
    document.getElementById("crystal5").style.display = "block";
  }
  console.log(hasBeenClicked);
})