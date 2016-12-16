
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


function newGame (){
  cardsFlipped =0;
  let output = ' ';
  shuffle();
  i =0;
  cardBacks.forEach(function(assign){
  output += '<div id ="cardfront_' + i++ +' "></div>';});

    /*  document.querySelector('#cardfront_1').addEventListener('click', magic3DFlip);
onclick */
       document.querySelector('#gameBoard').innerHTML = output;
        console.log(output);
};



//trying to work out nested if statements first if is for all elements
/* the two empty arrays I created going to manipulate them to to go back and forth
between push values of 0 and 1 to the array and see if there is
a match.
This is based on the idea that each match is a win and collectively all matches is a game win.
 */
function magic3DFlip(cardfront, val){
if(cardfront.innerHTML = "" && memoryValues.length < 2){
       cardfront.style.background = red;
       cardfront.innerHTML = val;
              if(memoryValues.length == 0){
                  memoryValues.push(val);
                  memoryID.push(cardfront.id);
                }else if (memoryValues.length == 1){
                  memoryValues.push(val);
                   memoryID.push(cardfront.id);
                   function solo2GameWin ();
                } else {
                  function returnBack ();}


//
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

//need to research how to pick array.[index] in a selector
   function returnBack () {
                 let choice1 = document.querySelector("")
                 let choice2 = document.querySelector("")
                 choice1.style.background = 'url (../assets/cardfront.jpeg) no-repeat';
                 choice2.style.background = 'url (../assets/cardfront.jpeg) no-repeat';
                 choice1.innerHTML = "";
                 choice2.innerHTML = "";

   }


                   //everytime there is a match  it is 2 card match so need to add 2 for every match so that in game end
                   // cards flipped over will equal







        memoryID.push(cardfront.id)
      }




*/





/*if assigned values is  blank or have not been assigned and no id given then
window.addEventListener("onload", newGame()); */
