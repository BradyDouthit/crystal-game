var getRandomNumber = function() {
    var x = document.getElementById("number-box")
    x.innerHTML = Math.floor((Math.random() * 120) + 19);
    return x.innerHTML;
  }
var randomNumber = getRandomNumber();
var numberArray = Array();
var addedNumberValue = 0;
var addedNumberElement = document.getElementById("added-numbers");
var losses = 0;
var lossesElement = document.getElementById("loss-count");
var wins = 0;
var winsElement = document.getElementById("win-count");
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

$("#crystal1").on("click", function() {
  var numberValue = numberArray[0];
  addedNumberValue = addedNumberValue + numberValue;
  addedNumberElement.innerHTML = addedNumberValue;
  if (addedNumberValue > randomNumber){
    losses = losses + 1;
    lossesElement.innerHTML = losses + " times";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
  if (addedNumberValue == randomNumber) {
    wins = wins + 1;
    winsElement.innerHTML = wins + " times";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
})
$("#crystal2").on("click", function() {
  var numberValue = numberArray[1];
  addedNumberValue = addedNumberValue + numberValue;
  addedNumberElement.innerHTML = addedNumberValue;
  if (addedNumberValue > randomNumber){
    losses = losses + 1;
    lossesElement.innerHTML = losses + " times";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
  if (addedNumberValue == randomNumber) {
    wins = wins + 1;
    winsElement.innerHTML = wins + " times";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
})
$("#crystal3").on("click", function() {
  var numberValue = numberArray[2];
  addedNumberValue = addedNumberValue + numberValue;
  addedNumberElement.innerHTML = addedNumberValue;
  if (addedNumberValue > randomNumber){
    losses = losses + 1;
    lossesElement.innerHTML = losses + " times";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
  if (addedNumberValue == randomNumber) {
    wins = wins + 1;
    winsElement.innerHTML = wins + " times";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
})
$("#crystal4").on("click", function() {
  var numberValue = numberArray[3];
  addedNumberValue = addedNumberValue + numberValue;
  addedNumberElement.innerHTML = addedNumberValue;
  if (addedNumberValue > randomNumber){
    losses = losses + 1;
    lossesElement.innerHTML = losses + " times";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
  if (addedNumberValue == randomNumber) {
    wins = wins + 1;
    winsElement.innerHTML = wins + " times";
    numberArray = [];
    randomCrystalValue();
    randomNumber = getRandomNumber();
    addedNumberValue = 0; 
    addedNumberElement.innerHTML = "";
  }
})