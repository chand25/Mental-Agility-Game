
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
        i = 0;
        cardBacks.forEach(function(assign){
        output += '<div id ="cardfront_' + i++ +' " onclick="magic3DFlip(this, \''+cardBacks[i] + ' \' )"></div>'});

      }
         document.querySelector('#gameBoard').innerHTML = output;
         console.log(output);


        /*produce += '<div id ="cardfront_' + i++ +' "></div>';});
        let clickableDivs = document.querySelectorAll('#gameBoard > div');
        for( i= 0; i > clickableDivs.length; i++){
        clickableDivs[i].addEventListener('click', magic3DFlip)};   */

window.addEventListener('onload', newGame);

//trying to work out nested if statements first step - is for all elements
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
                       solo2GameWin ();
                    }else {
                      returnBack ();
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

//need to research how to put array.[index] in a selector
   function returnBack () {
                 let choice1 = document.getElementById(memoryID[0]);
                 let choice2 = document.getElementById(memoryID[1]);
         /*        let choice1 = document.querySelector("memoryID[0]");
                 let choice2 = document.querySelector("memoryID[1]");

                 */
                 choice1.style.background = 'url (../assets/cardfront.jpeg) no-repeat';
                 choice2.style.background = 'url (../assets/cardfront.jpeg) no-repeat';
                 choice1.innerHTML = "";
                 choice2.innerHTML = "";
                 memoryValues = [];
                 memoryID = [];
                 setTimeout(returnBack, 900);
  }





/*
format: setTimeout(function(){ alert("Hello"); }, 3000);

    everytime there is a match  it is 2 card match so need to add 2 for every match so that in game end
  cards flipped over will equal total length of original cards array


if assigned values is  blank or have not been assigned and no id given then
window.addEventListener("onload", newGame());
*/
