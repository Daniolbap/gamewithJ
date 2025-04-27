function greenPush() {
  $(".green").on("click", function () {
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
        $(".green").fadeOut(200);
        $(".green").fadeIn();
        $(".green").css("border", "12px solid #000");
        setTimeout(function () {
          $(".green ").css("border", "10px solid #000");
        }, 500);
        break;
      case "2":
        $(".red").fadeOut(200);
        $(".red").fadeIn();
        $(".red").css("border", "12px solid #000");
        setTimeout(function () {
          $(".red ").css("border", "10px solid #000");
        }, 500);
        break;
      case "3":
        $(".yellow").fadeOut(200);
        $(".yellow").fadeIn();
        $(".yellow").css("border", "12px solid #000");
        setTimeout(function () {
          $(".yellow ").css("border", "10px solid #000");
        }, 500);
        break;
      case "4":
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
