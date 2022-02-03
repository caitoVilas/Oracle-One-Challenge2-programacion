const d = document;
let secretWords = ["CASA", "PERRO", "ALURA", "ORACLE", "JAVASCRIPT"];
let word;
let hyphenatedWord;
let letter;
let contador = 0;
localStorage.setItem("words", JSON.stringify(secretWords));


// captura elementos

const $home = d.getElementById('home');
const $game = d.getElementById('game');
const $add  = d.getElementById('add-word');
let $output = d.querySelector('#output');
const $btnPress = d.getElementsByName('keyPress');
const $msg = d.querySelector('#msg');
const $msgErr = d.querySelector('#msg-err')
const $ahorcado = d.querySelector('#horca');
const $newWord = d.querySelector('.form-control');
const $btnSave = d.querySelector(".btn-save");


d.addEventListener('DOMContentLoaded', (e) => {

    startGame('#btn-game');
    addWord('#btn-add');
    goHome('.btn-cancell');
    newGame('.btn-new');
    saveWord('.btn-save');
});

$btnPress.forEach(function(btn){
    btn.addEventListener('click', function(){
        btn.classList.add('disable');
        play(btn.innerText);
    })
})

function play(letter){

    let isFail = true;
    
    for(let i in word){

        if(letter == word[i]){
            hyphenatedWord = hyphenatedWord.replaceAt(i*2, letter);
            isFail = false;
        }
    }

    if(isFail){
        contador++;
        $ahorcado.src = `./images/${contador +1}.jpg`;
        if(contador == 5){
            $msgErr.innerHTML = `<i class="far fa-sad-tear 3x"></i><br>Has fallado!`
        }
        console.log("error")
    }else{
        $output.innerHTML = hyphenatedWord;
        if(hyphenatedWord.indexOf('_') < 0){
            $msg.innerHTML = `<i class="fas fa-trophy 3x"></i><br>Felicitaciones has ganado!`;
        }
    }
}

const startGame = (btnGame) => {

    d.addEventListener('click',  (e) => {

        if(e.target.matches(btnGame)){

            $home.classList.add('noView');
            $add.classList.add('noView');
            $game.classList.remove('noView');
            initialize();
            $output.innerHTML = hyphenatedWord;
            
        }
    });
}

const addWord = (btnAdd) => {

    d.addEventListener('click', (e) => {

        if(e.target.matches(btnAdd)){

            $home.classList.add('noView');
            $game.classList.add('noView');
            $add.classList.remove('noView');

        }
    });
}

const goHome = (btnCancel) => {

    d.addEventListener('click', (e) => {

        if(e.target.matches(btnCancel)){
            $add.classList.add('noView');
            $game.classList.add('noView');
            $home.classList.remove('noView');
            reset();
        }
    });
}

const initialize = () => {

    workingWord = localStorage.getItem('words');
    workingWord = JSON.parse(workingWord);
    word = workingWord[Math.floor(Math.random()* workingWord.length)];
    hyphenatedWord = word.replace(/./g,"_ ");
    console.log("initialize")
    console.log(word)
    console.log(hyphenatedWord)
}

const reset = () => {

    word = ''
    hyphenatedWord = '';
    // console.log("reset");
    // console.log(word);
    // console.log(hyphenatedWord);
    $btnPress.forEach((button) => {
        button.classList.remove('disable');
   
    });
    $msg.innerHTML = "";
    $msgErr.innerHTML = "";
    $ahorcado.src = './images/1.jpg';
    contador = 0;
}

const newGame = (btnNew) => {

    d.addEventListener('click', (e) => {

        if(e.target.matches(btnNew)){
            reset();
            $home.classList.add('noView');
            $add.classList.add('noView');
            $game.classList.remove('noView');
            initialize();
            $output.innerHTML = hyphenatedWord;
        }
        
    });
}


String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 

const saveWord = (btnSave) => {

    d.addEventListener('click', (e) => {

        if(e.target.matches(btnSave)){


            let newWord = $newWord.value;
            newWord = newWord.toUpperCase();
            if(newWord == '')
                return;
            let wordsCollection = localStorage.getItem('words');
            wordsCollection = JSON.parse(wordsCollection);
            wordsCollection.push(newWord);
            localStorage.removeItem('words');
            localStorage.setItem('words', JSON.stringify(wordsCollection));
            alert('Palabra Guardada');
        }
    });
}