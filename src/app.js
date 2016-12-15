
let memoryValues = [];
let memoryID = [];
let cardsFlipped = 0;

const cardBacks = ['KM', 'KM', 'DM', 'DM'];

function shuffle() {
  let index;
  let temphold;
  let curturn = cardBacks.length;
//for or while each card I want the values to change once function is called
//switcharoo
  while(cardBacks.length > 0) {
  index = Math.floor(Math.random() * curturn);
  curturn--;

  temphold = cardBacks[curturn];
  cardBacks[curturn] = cardBacks[index];
  cardBacks[index] = temphold;
  }
  return [];
};

//for or while each card I want the values to change once function is called
//switcharoo
function shuffle();

