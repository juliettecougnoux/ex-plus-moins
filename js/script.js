// Class qui implémente le jeu du plus ou moins
var Game = function(max) {
  this.answer = Math.floor(Math.random() * max);
  this.test = function(guess) {
    if (guess > this.answer) {
      return "Moins... Allez, tu peux trouver !";
    } else if (guess < this.answer) {
      return "Plus... Cherche encore !";
    } else {
      return "Bravo ! Tu l'as fait !";
    }
  };
};

$(document).ready(function() {
  var g = new Game(1000);
  $("#number").on("keypress", function(e) {
    if (e.which == 13) {
      var ans = $("#number").val();
      $("#number").val("");
      $("p").remove();
      $(".reponse").prepend("<p>" + g.test(ans) + "</p>");
      $("p").animate({
        opacity: 1,
      });
    };
  });
  var s = 60;
  var temps;
  var start = false;

  // var chrono = function() {
  //   if (s > 0) {
  //     return s--;
  //   }
  // }

  $("#number").click(function() {
    start = true;
});

  $("#number").click(function() {
    if (start = true) {
      time=setInterval(function(){
          $("#s").html(s);
          if(s > 0) {
            s--;
          }
      }, 1000);
      start = false;
    }
  });
});
