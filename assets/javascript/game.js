$(document).ready(function(){
  // 
var targetNumber = 0;
targetNumber = Math.floor((Math.random() * 120) + 19);
console.log(targetNumber)
var gem1= Math.floor((Math.random() * 12) +1);
console.log(gem1);
var gem2 = Math.floor((Math.random() * 12) +1);
console.log(gem2)
var gem3 = Math.floor((Math.random() * 12) +1);
console.log(gem3)
var gem4 = Math.floor((Math.random() * 12) +1);
console.log(gem4);
var userGuess = 0; 

$("#crystalOne").click(function(){
    
  $("#number-to-guess").html("number to guess: " + targetNumber);


});
});



// $("#crystalTwo").click(function(){
//     targetNumber = Math.floor((Math.random() * 100) +1);
//     $("#number-to-guess").html("number to guess: " + targetNumber);


//   });


// $("#crystalThree").click(function(){
//     targetNumber = Math.floor((Math.random() * 100) +1);
//     $("#number-to-guess").html("number to guess: " + targetNumber);


//   });

// $("#crystalFour").click(function(){
//     targetNumber = Math.floor((Math.random() * 100) +1);
//     $("#number-to-guess").html("number to guess: " + targetNumber);


// });

// var gems= ["blue", "green", "red", "orange"];
// function game(arr){
//     for(var i=0; i < arr.length; i++){
//       console.log(arr[i])
//     }

// }
// game(gems);
// // function randomNumber(){
   
// //     targetNumber = Math.floor((Math.random() * 100) + 1);
// //     $("#number-to-guess").append("number to guess: " + targetNumber);
    
// // }
// // randomNumber();
// // console.log(targetNumber);

