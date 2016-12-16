let memoryValues = [];
let memoryID = [];
let cardsFlipped = 0;

const cardBacks = ['KM', 'KM', 'DM', 'DM'];

function shuffle(n) {
  let index;
  let temphold;
  let turn = cardBacks.length;
while(cardBacks.length > 0) {
  index = Math.floor(Math.random() * cardBacks.length);
  cardBacks.length--;

  temphold = cardBacks[cardBacks.length];
  cardBacks[cardBacks.length] = cardBacks[index];
  cardBacks[index] = temphold;
  }

};

//for or while each card I want the values to change once function is called
//switcharoo
function shuffle();
