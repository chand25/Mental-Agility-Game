console.log("cards.js is connected");

class Cards {
  constructor(name, color) {
    //Put attributes here!
     this.name = name;
     this.color = color;
     renderNme();
     renderClr();

  }
   renderNme(name){
   for(let i=0; i<this.name.length; i++){
    let myCard = new Card(this.name[i]);
    this.card.push(myCard);
  }
}
    renderClr(color){
    for(let i=0; i<this.color.length; i++){
    let myCard2 = new Card(this.color[i]);
    this.card.push(myCard2);
    }
  }
}


