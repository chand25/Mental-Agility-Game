
let memoryValues = [];
let memoryID = [];
let cardsFlipped = 0;
let backgdCards =["White", "Black", "Red", "Black", "Black", "White"];
let nameCards =  ["White", "Black", "Red", "Black", "White", "Red"];

//const cardBacks = (backgdCards, nameCards)

let currturn = backgdCards.length;
let currpass = nameCards.length;

cardBacks = new Array(backgdCards.length + nameCards.length);

function shuffle () {
          let index;
          let temphold;
        //for or while each card I want the values to change once function is called
        //switcharoo
          while(currturn > 0) {
          index = Math.floor(Math.random() * currturn);
          currturn--;
          temphold = backgdCards[currturn];
          backgdCards[currturn] = backgdCards[index];
          backgdCards[index] = temphold;
           }
         }

 function shuffle2 () {
          let index;
          let temphold;
        //for or while each card I want the values to change once function is called
        //switcharoo
          while(currpass > 0) {
          index = Math.floor(Math.random() * currpass);
          currpass--;
          temphold = nameCards[currpass];
          nameCards[currpass] = nameCards[index];
          nameCards[index] = temphold;
           }
         }


function startGame () {
      cardsFlipped =0;
      let output = ' ';
      shuffle();
      shuffle2();
     /* let i = -1;
      cardBacks.forEach(function(assign){
        output += '<div id ="cardfront_' + i++ +' " onclick="magic3DFlip(this, \''+cardBacks[i] + ' \' )"></div>'
        });*/
        for(i = -1; i >backgdCards.length; i++){
        output += '<div id ="cardfront_' + i++ +' " onclick="magic3DFlip(this, \''+backgdCards[i] + ' \' )"></div>'};
        //for(i = 5; i >nameCards.length; i++){
        //output += '<div id ="cardfront_' + i++ +' " onclick="magic3DFlip(this, \''+nameCards[i] + ' \' )"></div>'};

      /*for(i = 5; i >nameCards.length; i++){
      output += '<div id ="cardfront_' + i +' " onclick="magic3DFlip(this, \''+nameCards[i] + ' \' )"></div>'
        };
     nameCards.forEach(function(assign){
      let i = 6;
      output += '<div id ="cardfront_' + i++ +' " onclick="magic3DFlip(this, \''+nameCards[i] + ' \' )"></div>'
        });*/

      document.querySelector('#gameBoard').innerHTML = output;
      console.log(output);
 }



/*
function solo2GameWin () {
        if (memoryValues[0] = memoryValues[1]){
           cardsFlipped += 2;
           memoryValues = [];
           memoryID =[];
           if (cardsFlipped == curturn){
             //curturn = cardBacks.length
            alert("We have a winner! Please start new Game");
           }
        }
}

function returnBack () {
  let choice1 = document.getElementById(memoryID[0]);
  let choice2 = document.getElementById(memoryID[1]);
  choice1.style.background = 'url (../assets/cardfront.jpeg) no-repeat';
  choice2.style.background = 'url (../assets/cardfront.jpeg) no-repeat';
  choice1.innerHTML = "";
  choice2.innerHTML = "";
  memoryValues = [];
  memoryID = [];
}
*/




function magic3DFlip(cardfront, val){
   if(cardfront.innerHTML == "" && memoryValues.length < 2){
        cardfront.style.background = "orange";
        //$("div div:nth-child(odd)").css("background-color", "white");
        //$("div div:nth-child(even)").css("color", "red");
         $("div div:nth-child(5)").css("background-color", "red");
         $("div div:nth-child(6)").css("background-color", "white");
          $("div div:nth-child(7)").css("background-color", "black");
          $("div div:nth-child(8)").css("background-color", "red");
         $("div div:nth-child(9)").css("background-color", "white");
          $("div div:nth-child(10)").css("background-color", "black");
        //$("div div:nth-child(odd)").attr('attribute', 'value');
        cardfront.innerHTML = val;

       if(memoryValues.length == 0){
        memoryValues.push(val);
        memoryID.push(cardfront.id);
       }else if (memoryValues.length == 1){
        memoryValues.push(val);
        memoryID.push(cardfront.id);
        if (memoryValues[0] == memoryValues[1]){
           cardsFlipped += 2;
           memoryValues = [];
           memoryID =[];
           if (cardsFlipped == cardBacks.length){
            alert("We have a winner! Please start new Game");
           }
        }else {
              function returnBack () {
              document.getElementById(memoryID[0]).style.background = "url('assets/cardfront.jpeg')";
              document.getElementById(memoryID[1]).style.background = "url('assets/cardfront.jpeg')";
              document.getElementById(memoryID[0]).innerHTML = "";
              document.getElementById(memoryID[1]).innerHTML = "";
              memoryValues = [];
              memoryID = [];
            }
         setTimeout(returnBack, 500);
        }
       }
     }
};



window.onload = function() {
document.querySelector('#reset').addEventListener('click', startGame);
}

