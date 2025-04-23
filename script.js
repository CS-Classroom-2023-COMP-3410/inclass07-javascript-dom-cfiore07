let deck = [];
let excludeCards = [127151, 127152, 127167, 127168, 127184]

function handleCardClick(){
if(this.children[0].style.display == "none"){
        this.children[0].style.display = '';
        this.children[1].style.display= "none";
    }
    else{
        this.children[1].style.display = "";
        this.children[0].style.display = "none";
    }
}

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

for(let i = 127137; i < 127137 + 62; i++){
    if(excludeCards.includes(i)){
        continue;
    }
    let cardString = `&#${i};`
    deck.push(cardString);
}

console.log(deck);

let cardChoice = deck.slice(0,10);
let gameCards = [];

for(let card of cardChoice) {
    gameCards.push(card);
    gameCards.push(card);
}

shuffle(gameCards);

for(let card of gameCards){
    let newNode = document.createElement('span');
    newNode.className = "card";
    newNode.innerHTML = card;
    document.body.appendChild(newNode);
    newNode.onclick = handleCardClick
}
