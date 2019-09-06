$(document).ready(function () {

  let target = Math.floor(Math.random() * 101 + 19),
      gem1 = Math.floor(Math.random() * 11 + 1),
      gem2 = Math.floor(Math.random() * 11 + 1),
      gem3 = Math.floor(Math.random() * 11 + 1),
      gem4 = Math.floor(Math.random() * 11 + 1),
      userTotal = 0,
      wins = 0,
      losses = 0;

  $('#randomNumber').text("Number To Get: " + target);
  //Callback function to play theme song
  function theme() {
    $("#theme")[0].play();
  } 
  //Resets the game
  function reset() {
    target = Math.floor(Math.random() * 101 + 19);
    $('#randomNumber').text("Number To Get: " + target);
    gem1 = Math.floor(Math.random() * 11 + 1);
    gem2 = Math.floor(Math.random() * 11 + 1);
    gem3 = Math.floor(Math.random() * 11 + 1);
    gem4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#total').text("Your Total is: " + userTotal);
  }
  //Adds the wins to the wins variable
  function win() {
    wins++;
    $("#winSound")[0].play();
    $('#numberWins').text("Wins: " + wins);
    reset();
  }
  //Adds the losses to the losses variable
  function lose() {
    losses++;
    $('#loseSound')[0].play();
    $('#numberLosses').text("Losses: " + losses);
    reset()
  }
  //Sets up click for gems
  $('#one').on('click', function () {
    userTotal = userTotal + gem1;
    $('#total').text("Your Total is: " + userTotal);
    $("#gemSound1")[0].play();
    theme();
    if (userTotal == target) {
      win();
    }
    else if (userTotal > target) {
      lose();
    }
  })
  $('#two').on('click', function () {
    userTotal = userTotal + gem2;
    $('#total').text("Your Total is: " + userTotal);
    $("#gemSound2")[0].play();
    theme();
    if (userTotal == target) {
      win();
    }
    else if (userTotal > target) {
      lose();
    }
  })
  $('#three').on('click', function () {
    userTotal = userTotal + gem3;
    $('#total').text("Your Total is: " + userTotal);
    $("#gemSound3")[0].play();
    theme();
    if (userTotal == target) {
      win();
    }
    else if (userTotal > target) {
      lose();
    }
  })
  $('#four').on('click', function () {
    userTotal = userTotal + gem4;
    $('#total').text("Your Total is: " + userTotal);
    $("#gemSound4")[0].play();
    theme();
    if (userTotal == target) {
      win();
    }
    else if (userTotal > target) {
      lose();
    }
  });
}); 
