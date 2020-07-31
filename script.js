//Create var to grab buttons
let buttons = document.getElementsByClassName("btn");
var secondsLeft = 60;
//add on event listener to buttons
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function clickButton(){      
    //check for event in console log
    console.log("COngrats!!!!!")
});
}
//End for loop


function timer() {

    //set interval function
    let countdown = document.getElementById("timer");
    let timerInterval = setInterval(
        function() {
            countdown.textContent = secondsLeft;
            secondsLeft--;

            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                //sendMessage("The Quiz is over"); this line will throw an error because we don't have sendmessage defined
            };
    }, 1000);
    //End setInterval
}

//create var for start quiz button
function quizModal() {
let startQuiz = document.getElementById("startButton")
        //create function for start quiz button to trigger timer
       for (var j = 0; j < startQuiz.length; i++) {
           startQuiz.addEventListener("click", function beginQuiz(){
            
            if(startQuiz === true) {
                let closeModal = startQuiz.addEventListener("keyup", function(){
                let hide = document.getElementById(exampleModal).hide;
                });
            
        }
    },
           )};        
//create function for start button
//if start is clicked, open first question, and start timer
//create question array
let quizFunc = function questionArray(){
let quizQuestions = [
    //Question 1
    
    { question:"What does DOM stand for?",
    answers: {
        A: "Desktop Object Model",
        B: "Document Order Model",
        C: "Document Object Model",
        D: "Document Order Means"
    },
    correct: "C Document Object Model" 
    },

    //Question 2

    { question: "i++ is ______",
    answers: {
        A: "the increment value of variable by one.",
        B: "the decrement value of variable by one.",
        C: "shorthand for var + 2.",
        D: "the infinitely increasing i."
    },
    correct: "A the increment value of variable by one."
    },
    
    //Questions 3
    { question: "How would you log x in the console?",
    answers: {
        A: "consoleLog = x",
        B: "console.log.x",
        C: "console.log === x",
        D: "console.log(x)"
    },
    correct: "D console.log(x)"
    },

    //Question 4
    {question: "What does API stand for?",
    answers: {
        A: "Application Provider Interface",
        B: "Application Programming Interface",
        C: "Appropriate Programming Interface",
        D: "Available Programming Inquiry"
    },
    correct: "Application Programming Interface"
    },
    //End Questions
]
//End Questions Array
//grab first property in question array
let aButton = document.getElementById("button-1-text");
    aButton.textContent = quizQuestions[0].answers[0];
//append first question to question div

//append [0]A to #button-1
//append [0]B to #button-2
//append [0]C to #button-3
//append [0]D to #button-4

//button click triggers correct or wrong 
//next question click brings up next index in array

//append [1]A to #button-1
//append [1]B to #button-2
//append [1]C to #button-3
//append [1]D to #button-4

//button click triggers correct or wrong 
//next question click brings up next index in array

//append [2]A to #button-1
//append [2]B to #button-2
//append [2]C to #button-3
//append [2]D to #button-4

//button click triggers correct or wrong 
//next question click brings up next index in array

//append [3]A to #button-1
//append [3]B to #button-2
//append [3]C to #button-3
//append [3]D to #button-4

//button click triggers correct or wrong 
//next question click brings up high score prompt
//high score is stored in localStorage.setItem

}};

function closeModal() {
    let closeButton = document.getElementById('modal-close')
    closeButton.click();
}


let startButton = document.getElementById("startButton")
startButton.addEventListener('click', () => {
    closeModal();
    timer();
})


