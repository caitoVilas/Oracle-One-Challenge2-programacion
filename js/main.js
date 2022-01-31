const d = document;
const secretWords = ["CASA", "PERRO", "ALURA", "ORACLE"];
const word = secretWords[Math.floor(Math.random()* secretWords.length)];
const hyphenatedWord = word.replace(/./g,"_ ")
console.log(`${word} ${hyphenatedWord}`);

       

d.addEventListener("DOMContentLoaded", (e) => {
    startGame("#btn-game");
    addWord("#btn-add");
    goHome(".btn-cancell");
});


const startGame = (btnGame) => {

   d.addEventListener('click', (e)=>{
      
       if(e.target.matches(btnGame)){

            let home = d.getElementById("home");
            let game = d.getElementById("game");
            let add = d.getElementById("add-word");

            home.classList.add("noView");
            add.classList.add("noView");
            game.classList.remove("noView");
       }    

   });
};


const addWord = (btnAdd) => {

    d.addEventListener('click', (e) => {
      
        if(e.target.matches(btnAdd)){
            let home = d.getElementById("home");
            let game = d.getElementById("game");
            let add = d.getElementById("add-word")

            home.classList.add("noView");
            game.classList.add("noView");
            add.classList.remove("noView");
        }

    });
};

const goHome = (btnCancell) => {

    d.addEventListener('click', (e) => {

        if(e.target.matches(btnCancell)){
            let home = d.getElementById("home");
            let game = d.getElementById("game");
            let add = d.getElementById("add-word")

            home.classList.remove("noView");
            game.classList.add("noView");
            add.classList.add("noView");
        }
    });
};

