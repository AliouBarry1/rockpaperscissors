

 let computerNumber = 0;

$(".play").click(function() {

    let userInput = $(".input").val();
    $(".userChoice").text(userInput);

  let computerNumber;
computerNumber = Math.random() * 4;
computerNumber = Math.ceil(computerNumber);
    $(".computerChoice").text(computerNumber);

});

