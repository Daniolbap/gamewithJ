$(document).on("click", function () {
  // $("h1").fadeToggle();
  //slide, slideToggle
  //animate only works whith numeric css parameters
  $(".green").css("background-color", "red");
  setTimeout(function () {
    $(".green").css("background-color", "green");
  }, 1000);
});
