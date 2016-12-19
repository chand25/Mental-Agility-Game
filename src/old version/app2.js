
let memoryValues = [];
let memoryID = [];
let cardsFlipped = 0;
const cardBacks = ['KM', 'KM', 'DM', 'DM'];


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
         }


function newGame (){
  cardsFlipped =0;
  let output = ' ';
  shuffle();
  for ( i = 0; i < cardBacks.length; i++){
  output += '<div id ="tile_' +i+' " onclick="Flipcard(this, \''+cardBacks[i] + ' \' )"></div>';
 }
 document.getElementById('gameBoard').innerHTML = output;

}

window.addEventListener(newGame());
