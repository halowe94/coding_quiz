//list of questions
//What does DOM stand for?
//what is missing form this function?
//How would you log x in the console?
//API stands for?
//Bonus Q

let quizDiv = document.querySelector("#quiz");
let submitButton = document.querySelector("#submit");
let resultsDiv = documetn.querySelector("#results");

function quiz() {
    let output = [
    //for each loop for questions
    quizQuestions.forEach(
        //How does this part work?
        (currentQuestion, questionNumber) => {
            //ie A-D
            let possibleAnswers = [];
        }
    )
    ]
}
function results () {}

//start quiz immediately
quiz()

//Event Listener
submitButton.addEventListener("click", resultsDiv);

//Quiz Questions Array
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