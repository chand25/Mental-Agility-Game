
let memoryValues = [];
let memoryID = [];
let cardsFlipped = 0;
const cardBacks = ["Red", "Black", "Orange", "Yellow", "Red", "Black", "Orange", "Yellow"];


function shuffle () {
          let index;
          let temphold;
          let curturn = cardBacks.length;
        //for or while each card I want the values to change once function is called
        //switcharoo
          while(curturn > 0) {
          index = Math.floor(Math.random() * curturn);
          curturn--;
          temphold = cardBacks[curturn];
          cardBacks[curturn] = cardBacks[index];
          cardBacks[index] = temphold;
           }
           return console.log(cardBacks);
         }


function newGame (){
  cardsFlipped =0;
  let output = ' ';
  shuffle();
  i =0;
  cardBacks.forEach(function(assign){
  output += '<div id ="tile_' + i++ +' "</div>';
 });
   document.getElementById('gameBoard').innerHTML = output;
}

/*if assigned values is  blank or have not been assigned and no id given then
window.addEventListener("onload", newGame()); */
