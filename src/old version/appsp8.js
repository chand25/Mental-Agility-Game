
let memoryValues = [];
let memoryID = [];
let cardsFlipped = 0;


const cardBacks = [["White"], ["Black"], ["Red"], ["Black"], ["Red"], ["White"], ["White"], ["Black"], ["Red"], ["Black"], ["White"], ["Red"],
["Black"], ["Red"], ["White"], ["Black"], ["White"], ["Red"], ["Red"], ["Black"], ["Black"],  ["Red"], ["White"], ["White"],]

let nameCards = [cardBacks[0], cardBacks[1], cardBacks[2],cardBacks[3], cardBacks[4], cardBacks[5],
                            cardBacks[12], cardBacks[13], cardBacks[14],cardBacks[15], cardBacks[16], cardBacks[17]]
let backgdCards = [cardBacks[6], cardBacks[7], cardBacks[8],cardBacks[9], cardBacks[10], cardBacks[11],
                               cardBacks[18], cardBacks[19], cardBacks[20],cardBacks[21], cardBacks[22], cardBacks[23]]


let currpass = nameCards.length
let curturn = backgdCards.length

//The approach used for shuffling the contents of the array is something that Fisher-Yates devised and Don Knuth popularized.
function shuffleClr() {
          let index;
          let temphold;
        //for or while each card I want the values to change once function is called
        //switcharoo
          while(curturn > 0) {
          index = Math.floor(Math.random() * curturn);
          curturn--;
          temphold = backgdCards[curturn];
          backgdCards[curturn] = backgdCards[index];
          backgdCards[index] = temphold;
           }
         }

function shuffleNme() {
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
      shuffleNme();
      shuffleClr();
       let i = -1;
      cardBacks.forEach(function(assign){
        output += '<div id ="cardfront_' + i++ +' " onclick="magic3DFlip(this, \''+cardBacks[i] + ' \' )"></div>'
        });
      document.querySelector('#gameBoard').innerHTML = output;
      console.log(output);
      setTimeout(function () {alert ("You Did Not Meet Time Requirement")}, 60000);
 }



function magic3DFlip(cardfront, val){
   if(cardfront.innerHTML == "" && memoryValues.length < 2){
        cardfront.style.background = "orange";
        cardfront.innerHTML = val;
         $("div div:nth-child(7)").css("background-color", "black");
         $("div div:nth-child(8)").css("background-color", "white");
          $("div div:nth-child(9)").css("background-color", "black");
          $("div div:nth-child(10)").css("background-color", "red");
         $("div div:nth-child(11)").css("background-color", "white");
          $("div div:nth-child(12)").css("background-color", "black");
          $("div div:nth-child(19)").css("background-color", "red");
         $("div div:nth-child(20)").css("background-color", "white");
          $("div div:nth-child(21)").css("background-color", "black");
          $("div div:nth-child(22)").css("background-color", "red");
         $("div div:nth-child(23)").css("background-color", "white");
          $("div div:nth-child(24)").css("background-color", "red");
       if(memoryValues.length == 0){
        memoryValues.push(val);
        memoryID.push(cardfront.id);
       }else if (memoryValues.length == 1){
        memoryValues.push(val);
        memoryID.push(cardfront.id);
        if ((memoryValues[0] == memoryValues[1] && document.getElementById(memoryID[0]).style.background === document.getElementById(memoryID[1]).style.background)
          || (document.getElementById(memoryID[0]).style.background === document.getElementById(memoryID[1]).style.background && cardfront.style.background !== "orange")){
           cardsFlipped += 2;
           memoryValues = [];
           memoryID =[];
           if (cardsFlipped == cardBacks.length){
            alert("Level 1 complete! Level 2 is WIP");
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

