$(document).ready(function(){
$("#crystalOne").click(function(){
    var targetNumber; 
    targetNumber = Math.floor((Math.random() * 100) + 1);
    $("#number-to-guess").html("number to guess: " + targetNumber);
    

  })


// function randomNumber(){
   
//     targetNumber = Math.floor((Math.random() * 100) + 1);
//     $("#number-to-guess").append("number to guess: " + targetNumber);
    
// }
// randomNumber();
// console.log(targetNumber);



  

//   $("#number-to-guess").text(targetNumber);
//   var counter = 0;
//   var numberOptions = [11, 5, 137, 23];
//   for (var i = 0; i < numberOptions.length; i++) {
   
//     var imageCrystal = $("<img>");
//     imageCrystal.addClass("crystal-image");
//     imageCrystal.attr("src", "https://i.ytimg.com/vi/R-ojLPePF44/maxresdefault.jpg");
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//     $("#crystals").append(imageCrystal);
//   }

  
//   $(".crystal-image").on("click", function() {
//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     counter += crystalValue;
//     alert("New score: " + counter);
//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("Try Again!!");
//     }

//   });
});