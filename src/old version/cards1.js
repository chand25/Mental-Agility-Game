let memoryValues = [];
let memoryID = [];
let cardsFlipped = 0;



let memCards = {
                        this.cards = ["Red", "Black", "Orange", "Yellow", "Red", "Black", "Orange", "Yellow"],
                        shuffle: function () {
                                let index;
                                let temphold;
                                let curturn = this.cards.length;
                              //for or while each card I want the values to change once function is called
                              //switcharoo
                                while(curturn > 0) {
                                index = Math.floor(Math.random() * curturn);
                                curturn--;
                                temphold = this.cards[curturn];
                                this.cards[curturn] = this.cards[index];
                                this.cards[index] = temphold;
                                 }
                               }
                          };


function newGame (){
                        cardsFlipped =0;
                        let output = ' ';
                        myCards.shuffle();
                      }






