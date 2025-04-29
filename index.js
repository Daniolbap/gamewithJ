let audioGreen = new Audio("./sounds/green.mp3");
let audioRed = new Audio("./sounds/red.mp3");
let audioYellow = new Audio("./sounds/yellow.mp3");
let audioBlue = new Audio("./sounds/blue.mp3");
let buttonColour = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
let level = 0;
let started = false;
function greenPush() {
  $(".green").on("click", function () {
    audioGreen.play();
    $(".green").fadeOut(200);
    $(".green").fadeIn();
    $(".green").css("border", "12px solid #000");
    setTimeout(function () {
      $(".green ").css("border", "10px solid #000");
    }, 500);
  });
}

function redPush() {
  $(".red").on("click", function () {
    audioRed.play();
    $(".red").fadeOut(200);
    $(".red").fadeIn();
    $(".red").css("border", "12px solid #000");
    setTimeout(function () {
      $(".red ").css("border", "10px solid #000");
    }, 500);
  });
}

function yellowPush() {
  $(".yellow").on("click", function () {
    audioYellow.play();
    $(".yellow").fadeOut(200);
    $(".yellow").fadeIn();
    $(".yellow").css("border", "12px solid #000");
    setTimeout(function () {
      $(".yellow ").css("border", "10px solid #000");
    }, 500);
  });
}

function bluePush() {
  $(".blue").on("click", function () {
    audioBlue.play();
    $(".blue").fadeOut(200);
    $(".blue").fadeIn();
    $(".blue").css("border", "12px solid #000");
    setTimeout(function () {
      $(".blue ").css("border", "10px solid #000");
    }, 500);
  });
}

function keys() {
  $(document).keypress(function (event) {
    console.log(event.key);
    switch (event.key) {
      case "1":
        audioGreen.play();
        $(".green").fadeOut(200);
        $(".green").fadeIn();
        $(".green").css("border", "12px solid #000");
        setTimeout(function () {
          $(".green ").css("border", "10px solid #000");
        }, 500);
        break;
      case "2":
        audioRed.play();
        $(".red").fadeOut(200);
        $(".red").fadeIn();
        $(".red").css("border", "12px solid #000");
        setTimeout(function () {
          $(".red ").css("border", "10px solid #000");
        }, 500);
        break;
      case "3":
        audioYellow.play();
        $(".yellow").fadeOut(200);
        $(".yellow").fadeIn();
        $(".yellow").css("border", "12px solid #000");
        setTimeout(function () {
          $(".yellow ").css("border", "10px solid #000");
        }, 500);
        break;
      case "4":
        audioBlue.play();
        $(".blue").fadeOut(200);
        $(".blue").fadeIn();
        $(".blue").css("border", "12px solid #000");
        setTimeout(function () {
          $(".blue ").css("border", "10px solid #000");
        }, 500);
        break;

      default:
        break;
    }
  });
}

$(document).on("keypress", function () {
  if (!started) {
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  level++;
  $("h1").text("Level " + level);

  console.log(Math.floor(Math.random() * 4));
  let randomNumber = Math.floor(Math.random() * 4) + 1;
  let randomChosenColour = buttonColour[randomNumber];
  gamePattern.push(randomChosenColour);
}

$(".btn").on("click", function () {
  let userChosenColour = this.id;

  userClickPattern.push(userChosenColour);
  console.log(userClickPattern);
});

greenPush();
redPush();
yellowPush();
bluePush();
keys();
