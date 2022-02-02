const d = document;
const secretWords = ["CASA", "PERRO", "ALURA", "ORACLE", "JAVASCRIPT"];
const word = secretWords[Math.floor(Math.random()* secretWords.length)];
let hyphenatedWord = word.replace(/./g,"_ ");
let fails = 0;
console.log(`${word} ${hyphenatedWord}`);
const btnPress = d.getElementsByName('keyPress');
let contador = 0;
let isFailed = true;

       

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
            fails = 0;

        }
    });
};

const getKey = (btnKey) => {

        

    d.addEventListener('click', (e) => {
        
        btnPress.forEach((button) => {
            button.addEventListener('click', (e) => {
                let letter = button.innerText;
                button.classList.add('disable');
                
                let isFailed = true;
                
                for(let i in word){
                    if(letter == word[i]){
                       hyphenatedWord = hyphenatedWord.replaceAt(i*2, letter); 
                       isFailed = false; 
                    }
                }

                if(isFailed){
                    fails++;
                    contador++;
                    console.log("fallo")
                    console.log(fails)
                    console.log(`contador ${contador}`)
        
                    //console.log("has perdido")
                    d.querySelector('#ahorcado').style.backgroundPosition = -(250*(contador)) + 'px';
                    if(contador == 4){
                        d.querySelector('#msg-err').innerHTML = `<i class="far fa-sad-tear 3x"></i><br>Has fallado!`;
                    }
                }else{
                    d.querySelector('#output').innerHTML = hyphenatedWord;
                    if(hyphenatedWord.indexOf('_') < 0){
                        d.querySelector('#msg').innerHTML = `<i class="fas fa-trophy 3x"></i><br>Felicitaciones has ganado!`;
                    }
                }

            });
            
        });
       
        
    });
   
}



 String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 


