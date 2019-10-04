// INIT
let score = 10;
let currentQuestion = 0;
let timer;
let count = 30;

// GET VARIABLES FROM HTML
let btnStart = document.getElementById('btnStart');
let btnQuaffle = document.getElementById('btnQuaffle');
let inputResponse = document.getElementById('inputResponse');
let main = document.querySelector('.main');
let quiz = document.getElementById('quiz');
let counter = document.getElementById('counter');
let time = document.getElementById('time');
let gif = document.getElementById('gif');
let quizTitle = document.getElementById('quizTitle');

// BTN START GAME
btnStart.addEventListener('click', () => {
    main.setAttribute('class', 'animation');
    btnStart.style.display = 'none';
    alert(guide);
    loadQuestion();
});

// BTN ANSWER
btnQuaffle.addEventListener('click', () => {
    let correctAnswer = questionsArray[currentQuestion].correctAnswer;

    if (correctAnswer === inputResponse.value) {
        score++;
        inputResponse.value = '';
        loadImage('right');
        setTimeout(() => {
            nextQuestion();
        }, 2000);
    
    } else {
        console.log('wrong');
        inputResponse.value = '';
        loadImage('wrong');
        setTimeout(() => {
            nextQuestion();
        }, 3000);
    }
});

function nextQuestion() {
    const isQuestionOver = (questionsArray.length - 1) === currentQuestion;
    if (isQuestionOver) {
        endGame();  
    } else {
        currentQuestion ++;
        loadImage('default');
        loadQuestion();
    }
}

function loadQuestion() {
    let question = questionsArray[currentQuestion].question;
    counter.innerText = currentQuestion + 1;
    quiz.innerText = question;
}

function endGame() {
   
    if (score >= 9) {
        loadImage('morte');
        quizTitle.innerText = 'You did it!'
        inputResponse.style.visibility = 'hidden';
        btnQuaffle.style.visibility = 'hidden';
        quiz.innerText = `Il tuo Q.I. schizza alle stelle totalizzando ${score * 10} ...`
        setTimeout(() => {
            loadImage('horcrux');
            quiz.innerText = textEndGame; 
        }, 5000);
    } else {
        loadImage('default');
        quizTitle.innerText = 'Non sei ancora pronta!'
        quiz.innerText = `Il tuo Q.I. è pari a ${score}. Riprova!`
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}

function loadImage(status) {
    switch (status) {
        case 'right':
            gif.src = 'https://media.giphy.com/media/RaTAFdOkxs0X6/giphy.gif';
            break;
        case 'wrong':   
            gif.src = 'https://media.giphy.com/media/3bC3sJfhHZ78c/giphy.gif';
            break;
        case 'morte':   
            gif.src = 'https://media.giphy.com/media/VT6eildjKdVWU/giphy.gif';
            break;
        case 'horcrux':   
            gif.src = '../img/mirror.jpg';
            break;
        default:
            gif.src = '../img/dono.jpg';
    }

}


