$(document).ready(function(){

  var magic8ball = {};
  magic8ball.listOfAnswers = ["It is certain.", "Most likely.", "Ask again later.", "Don't count on it.", "It is decidely so.", "Outlook good.", "Better not tell you now.", "Very doubtful.", "Without a doubt.", "Signs point to yes.", "Concentrate and ask again.", "My sources say no."];
    magic8ball.askQuestion = function(question) {
    $("#answer").fadeIn(4000);
        var randomIndex = Math.floor(Math.random() * this.listOfAnswers.length);
        var answer = this.listOfAnswers[randomIndex];
    $("#answer").text(answer);
    console.log(question);
    console.log(answer);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    };
  $("#answer").hide();

    var onClick = function() {
        $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

    //shake that ball!
    $("#8ball").effect("shake");

    //half a second delay
    setTimeout(
      function() {
        //show prompt
        var question = prompt("What do you wish to know?");
        magic8ball.askQuestion(question);
      }, 500);

    };

    $("#questionButton").click(onClick);
});