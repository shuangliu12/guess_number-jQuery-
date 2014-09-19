$(".game_start").on('click', function(event){
  // var max = prompt("Type the maximum number");
  // if (max.length != 0){
  //   $('.first').append("Guess a number between 0 and "+ max +'.');
  // }
  // else{
  //   alert("Please enter a proper number.");
  // }
  $('.first').append("Guess a number between 0 and 10");


  var guess_start = function(){
    var answer = Math.floor(Math.random()*10)+1;
    $('#submit').on('click', function(event){

      var guess = $('input:text').val();
      var userGuess = Number(guess);
      $('.second').append('<p>You guess: ' + userGuess + '</p>');
      if(userGuess == answer){
        alert('You Won!');
      }else if (userGuess < answer){
          $('.second').append(userGuess +' is too low.');
       }else{
          $('.second').append(userGuess +' is too high.');
       }

    });
  }
  guess_start();
});







