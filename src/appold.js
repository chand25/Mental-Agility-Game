
let memoryValues = [];
let memoryID = [];
let cardsFlipped = 0;
const cardBacks = ["Red", "Black", "Orange", "Yellow", "Red", "Black", "Orange", "Yellow"];

let curturn = cardBacks.length;

function shuffle () {
          let index;
          let temphold;
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


function startGame () {
      cardsFlipped =0;
      let output = ' ';
      shuffle();
      i = 0;
      cardBacks.forEach(function(assign){
      output += '<div id ="cardfront_' + i++ +' " onclick="magic3DFlip(this, \''+cardBacks[i] + ' \' )"></div>'
      });
      document.querySelector('#gameBoard').innerHTML = output;
      console.log(output);
 };

//window.addEventListener("onload", startGame);


function magic3DFlip(cardfront, val){
     if(cardfront.innerHTML == "" && memoryValues.length < 2){
           cardfront.style.background = 'red';
           cardfront.innerHTML = val;
                    if(memoryValues.length == 0){
                      memoryValues.push(val);
                      memoryID.push(cardfront.id);
                    }else if (memoryValues.length == 1){
                      memoryValues.push(val);
                       memoryID.push(cardfront.id);
                       solo2GameWin ();
                    }else {
                      returnBack ();
                      setTimeout(returnBack, 900);
                    }



function solo2GameWIn () {
        if (memoryValues[0] = memoryValues[1]){
                      cardsFlipped += 2;
                      memoryValues = [];
                      memoryID =[];
                      if (cardsFlipped == curturn){
                        //curturn = cardBacks.length
                        alert("We have a winner! Please start new Game");
                      }
                     };


function returnBack () {
  let choice1 = document.getElementById(memoryID[0]);
  let choice2 = document.getElementById(memoryID[1]);
  choice1.style.background = 'url (../assets/cardfront.jpeg) no-repeat';
  choice2.style.background = 'url (../assets/cardfront.jpeg) no-repeat';
  choice1.innerHTML = "";
  choice2.innerHTML = "";
  memoryValues = [];
  memoryID = [];
};
