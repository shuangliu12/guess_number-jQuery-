function getMaxNumber() {
  var max = prompt("Type the maximum number");

  if (max.length != 0){
    $('.first').append("Guess a number between 0 and "+ max +'.');
  } else {
    alert("Please enter a proper number.");
  }
  return max;
}

function setAnswer(max) {
  return Math.floor(Math.random()*max)+1;
}

function getGuess(answer) {
  $('#submit').on('click', function(event){

    var guess = $('input:text').val();
    debugger;
    if(guess.length == 0 || Number(guess) != guess){
        alert("Please enter a proper number.")
    } else{
      var userGuess = Number(guess);
    }

    $('.second').append('<p>You guess: ' + userGuess + '</p>');
    if(userGuess == answer){
      alert('You Won!');
    }else if (userGuess < answer){
        $('.second').append(userGuess +' is too low.');
    }else{
        $('.second').append(userGuess +' is too high.');
    };
  });
}

// function guessStart() {
//   getMaxNumber();
// }

$(".game_start").on('click', function(event){
  var max = getMaxNumber();
  var answer = setAnswer(max);
  getGuess(answer);

  // var guess_start =

  //   var answer = Math.floor(Math.random()*max)+1;
  //   $('#submit').on('click', function(event){

  //     var guess = $('input:text').val();

  //     if(guess.length == 0 || Number(guess) != guess){
  //         alert("Please enter a proper number.")
  //     } else{
  //       var userGuess = Number(guess);
  //     }
  //     $('.second').append('<p>You guess: ' + userGuess + '</p>');
  //       if(userGuess == answer){
  //         alert('You Won!');
  //       }else if (userGuess < answer){
  //           $('.second').append(userGuess +' is too low.');
  //       }else{
  //           $('.second').append(userGuess +' is too high.');
  //       };

  //   });
  // }
  // guess_start();
});







