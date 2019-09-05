$(document).ready(function () {

  let Random = Math.floor(Math.random() * 101 + 19)
  $('#randomNumber').text("Number To Get: " + Random);
  let num1 = Math.floor(Math.random() * 11 + 1)
  let num2 = Math.floor(Math.random() * 11 + 1)
  let num3 = Math.floor(Math.random() * 11 + 1)
  let num4 = Math.floor(Math.random() * 11 + 1)
  let userTotal = 0;
  let wins = 0;
  let losses = 0;

  //  Decaring variables for tallies
  $('#numberWins').text("Wins: " + wins);
  $('#numberLosses').text("Losses: " + losses);
  //resets the game
  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    $('#randomNumber').text("Number To Get: " + Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#total').text("Your Total is: " + userTotal);
  }
  //adds the wins to the userTotal
  function yay() {
    $("#winSound")[0].play();
    wins++;
    $('#numberWins').text("Wins: " + wins);
    reset();
  }
  //adds the losses to the userTotal
  function loser() {
    $("#loseSound")[0].play();
    losses++;
    $('#numberLosses').text("Losses: " + losses);
    reset()
  }
  //sets up click for jewels
  $('#one').on('click', function () {
    userTotal = userTotal + num1;
    $('#total').text("Your Total is: " + userTotal);
    $("#gemSound1")[0].play();
    //sets win/lose conditions
    if (userTotal == Random) {
      yay();
    }
    else if (userTotal > Random) {
      loser();
    }
  })
  $('#two').on('click', function () {
    userTotal = userTotal + num2;
    $('#total').text("Your Total is: " + userTotal);
    $("#gemSound2")[0].play();
    if (userTotal == Random) {
      yay();
    }
    else if (userTotal > Random) {
      loser();
    }
  })
  $('#three').on('click', function () {
    userTotal = userTotal + num3;
    $('#total').text("Your Total is: " + userTotal);
    $("#gemSound3")[0].play();
    if (userTotal == Random) {
      yay();
    }
    else if (userTotal > Random) {
      loser();
    }
  })
  $('#four').on('click', function () {
    userTotal = userTotal + num4;
    $('#total').text("Your Total is: " + userTotal);
    $("#gemSound4")[0].play();
    if (userTotal == Random) {
      yay();
    }
    else if (userTotal > Random) {
      loser();
    }
  });
}); 
