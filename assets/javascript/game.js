
  $(document).ready(function() {




var yourMatchingNumber=0;

randomNumber= numberGenerator();


var wins=0;
var losses=0
var ghostBuster;



function imageNumValue(){
  return{
    ray:{
      points: Math.floor(Math.random()*10)+1,
      image:"assets/images/ray.jpg"
    },
    egon:{
      points: Math.floor(Math.random()*10)+1,
      image:"assets/images/egon.jpg"
    },
    winston:{
      points:Math.floor(Math.random()*10)+1,
      image:"assets/images/winston.jpg"
    },
    peter:{
      points:Math.floor(Math.random()*10)+1,
      image:"assets/images/peter.jpg"
    }
  };

}


function numberGenerator(){
  return Math.floor(Math.random()*140)+20;
}
  

function startGame(){

  $("#win-area").empty();
  yourMatchingNumber = 0;
  
  ghostBuster= imageNumValue();
   console.log(ghostBuster);


  randomNumber= numberGenerator()
  $("#random-Number").text(randomNumber);
  

}


function updateDom(didUserWin){
  $("#win-area").empty();

  if(didUserWin === true){
    
    $("#win-area").append($("<p>").text("You won!"));
    startGame();
    renderMatchingNumber();
  }
  else if(didUserWin === false){
    $("#win-area").append($("<p>").text("You Lost!"));
    startGame();
    renderMatchingNumber();
  }

  var win = $("<span>").text(wins);
  var loss = $("<span>").text(losses);

  var pWins = $("<p>").text("Wins: ");
  var pLosses = $("<p>").text("Losses: ");

  pWins.append(win);
  pLosses.append(loss);

  $("#win-area").append(pWins);
  $("#win-area").append(pLosses); 
}




  function renderCharacters() {
    for (var key in ghostBuster) {
      var ghostDiv = $("<div class='character-button' data-name='" + key + "'>");
      var characterImg = $("<img alt='image' class='character-img'>").attr("src", ghostBuster[key].image);
      ghostDiv.append(characterImg);
      $("#character-area").append(ghostDiv);
    }
  }

  function updateMatchingNumber(character){
    yourMatchingNumber += ghostBuster[character.attr("data-name")].points;
    }

    function renderMatchingNumber(){
      var scoreNumDiv=$("<div id='score-number'>").text(yourMatchingNumber);
      $("#score-area").html();
      $("#score-area").html(scoreNumDiv);
    }




  startGame();
  renderCharacters();


  $(".character-button").on("click", function(event){
    $("#score-area").addClass('zap');
    updateMatchingNumber($(this));
    renderMatchingNumber();

    if(yourMatchingNumber === randomNumber){
      wins++;
      startGame();
      updateDom(true);
    }
    else if(yourMatchingNumber > randomNumber){
      losses++;
      startGame();
      updateDom(false);
    }
  });

  $("#howToPlay").on("click", function(){
    alert("You will be given a random number at the start of the game.There are four characters below. By clicking on a character you will add a specific amount of points to your total score. You win the game by matching your total score to Slimer's number, you lose the game if your total score goes above Slimer's number. The value of each character is hidden from you until you click on it. Each time when the game starts, the game will change the values of each character")
  })
});