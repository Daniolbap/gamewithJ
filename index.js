let audioGreen = new Audio("./sounds/green.mp3");
let audioRed = new Audio("./sounds/red.mp3");
let audioYellow = new Audio("./sounds/yellow.mp3");
let audioBlue = new Audio("./sounds/blue.mp3");

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

greenPush();
redPush();
yellowPush();
bluePush();
keys();
