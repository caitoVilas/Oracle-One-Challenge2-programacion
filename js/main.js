const d = document;
const secretWords = ["CASA", "PERRO", "ALURA", "ORACLE", "JAVASCRIPT"];
const word = secretWords[Math.floor(Math.random()* secretWords.length)];
let hyphenatedWord = word.replace(/./g,"_ ");
console.log(`${word} ${hyphenatedWord}`);
const btnPress = d.getElementsByName('keyPress');

       

d.addEventListener("DOMContentLoaded", (e) => {
    startGame("#btn-game");
    addWord("#btn-add");
    goHome(".btn-cancell");
    getKey("btn-key");
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
            d.querySelector('#output').innerHTML = hyphenatedWord;


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

            btnPress.forEach((button) => {
                    button.classList.remove('disable');
               
            });
            hyphenatedWord = word.replace(/./g,"_ ");

        }
    });
};

const getKey = (btnKey) => {

    d.addEventListener('click', (e) => {
       
        
       
        btnPress.forEach((button) => {
            button.addEventListener('click', (e) => {
                let letter = button.innerText;
                button.classList.add('disable');
           
                for(let i in word){
                    if(letter == word[i]){
                       hyphenatedWord = hyphenatedWord.replaceAt(i*2, letter);
                      
                    }
                    d.querySelector('#output').innerHTML = hyphenatedWord;
                }
                
            });
        });
       
    });
   
}

 function replaceAt(index, character){
     return
 }

 String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 


