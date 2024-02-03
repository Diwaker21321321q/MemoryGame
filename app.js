let cardarray = [
  {
    name: "Snapchat",
    imgurl: "https://www.freepnglogos.com/uploads/snapchat-logo-png-0.png",
  },
  {
    name: "starbucks",
    imgurl:
      "https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png",
  },
  {
    name: "pubg",
    imgurl:
      "https://www.freepnglogos.com/uploads/pubg-png/pubg-png-playerunknown-battlegrounds-windows-central-0.png",
  },
  {
    name: "JS",
    imgurl:
      "https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png",
  },
  {
    name: "twitter",
    imgurl:
      "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png",
  },
  {
    name: "telegram",
    imgurl: "https://www.freepnglogos.com/uploads/telegram-logo-png-0.png",
  },
];

//this is your 2 duplicate wala part
const gamecard = cardarray.concat(cardarray);

//this is your shuffling wala part
let shuffeledchild = Array.from(gamecard).sort(() => 0.5 - Math.random());

const parentdiv = document.querySelector("#card-section");

let clickcount = 0;
let firstclick = "";
let secondclick = "";
const sameCard = () => {
  let selectedCard = document.querySelectorAll(".card-selected");
  selectedCard.forEach((currElem) => {
    currElem.classList.add("card-match");
  });
};

const resetGame = () => {
  firstclick = "";
  secondclick = "";
  clickcount = 0;

  let selectedCard = document.querySelectorAll(".card-selected");
  selectedCard.forEach((currElem) => {
    currElem.classList.remove("card-selected");
  });
};

parentdiv.addEventListener("click", (event) => {
  let currCard = event.target;

  if (currCard.id === "card-section") {
    return false;
  }

  if (clickcount < 3) {
    if (clickcount === 1) {
      firstclick = currCard.parentNode.dataset.name;
      currCard.parentNode.classList.add("card-selected");
    } else {
      secondclick = currCard.parentNode.dataset.name;
      currCard.parentNode.classList.add("card-selected");
    }
    if (firstclick != "" && secondclick != "") {
      if (firstclick === secondclick) {
        setTimeout(() => {
          sameCard();
          resetGame();
        }, 1000);
      } else {
        setTimeout(() => {
          // sameCard();
          resetGame();
        }, 1000);
      }
    }
    clickcount++;
  }
});

for (let i = 0; i < shuffeledchild.length; i++) {
  const childdiv = document.createElement("div");
  childdiv.classList.add("card");

  childdiv.dataset.name = shuffeledchild[i].name;
  // childdiv.style.backgroundImage = `url(${shuffeledchild[i].imgurl})`;

  const frontdiv =document.createElement("div");
  frontdiv.classList.add("front-card");

  const backdiv = document.createElement("div");
  backdiv.classList.add("back-card");
  backdiv.style.backgroundImage = `url(${shuffeledchild[i].imgurl})`;

  parentdiv.appendChild(childdiv);
  childdiv.append(frontdiv,backdiv);
}
