/* Below Array is containing 5 questions*/
var QUESTIONS = [
  {
    question: "What is the capital of india?",
    answer: ["mumbai", "delhi", "kolkata", "banglore"],
    correctAnswer: "delhi",
  },
  {
    question: "Who is founder of C lanugage?",
    answer: ["Dennis Richie", "Bill Gates", "Mark Zukerberg", "Satya nadela"],
    correctAnswer: "Dennis Richie",
  },
  {
    question: "What is the Java first name?",
    answer: ["OOP", "Oak", "Sunmicro", "Orcale"],
    correctAnswer: "Oak",
  },
  {
    question: "What inheritance provide ?",
    answer: ["abstraction", "encapsulation", "resulablity", "Hiding"],
    correctAnswer: "resulablity",
  },
  {
    question: "What is not feature of java?",
    answer: ["hiding", "abstration", "encapsulation", "inheritance"],
    correctAnswer: "hiding",
  },
];
/* ------------------------------------------------------------------------------------------------------------------ */

/*--------------------------------------------------Declaring Variables ----------------------------------------------*/
let score = 0;
let qno = 0;
var answer;
/* ------------------------------------------------------------------------------------------------------------------ */

/*--------------------------------------------------Function Definations and Calling Part ----------------------------------------------*/

/*-------------Hide Button and Show button on Radio Check//Start---------------------*/
function submitHide() {
  $("#button-submit").hide();
  $(".radiogroup").click(function () {
    if ($("input[name=answer]:checked").val()) {
      $("#button-submit").show();
    }
  });
}
/*--------------END--------------------*/

/*--------------Start quiz first page when app launch-----*/
function startQuiz() {
  $("main").on("click", "#button-start", function (event) {
    $(".start-quiz").hide();
    LoadQuestion();
    submitHide();
  });
}
/*--------------END-----*/

function nextQuestion() {
  console.log("inside nextquestion function");
  $("main").on("click", "#button-submit", function (event) {
    $(".answer").empty();
    $(".quiz-form").empty();
    LoadQuestion();
    $("quiz-form").show();
  });
}

/*--------------Load First Question as soon we start the quiz -----*/
function LoadQuestion() {
  if (qno < QUESTIONS.length) {
    let question = $(`<form class ="quiz-form border">
    <legend class = "question">${QUESTIONS[qno].question}</legend>
    <ol type="A" class="radiogroup" role="radiogroup" aria-labelledby="question"></ol>`);
    let answers = QUESTIONS[qno].answer.map(function (
      answerValue,
      answerIndex
    ) {
      return `<label for="${answerValue}"><input class="myradio" type="radio" id="${answerValue}" name="answer" tabindex="${answerIndex}" value="${answerValue}" aria-checked="false" required>${answerValue}</label><br>`;
    });
    let button = $(
      `<button type="submit" id ="button-submit">Next</button></form>`
    );
    $(".quiz").append(question);
    $(".radiogroup").append(answers, button);
    submitHide();
    nextQuestion();
  } else {
    displayResults();
  }
}
/*--------------END--------------------------------*/

/*--------------Checking the radio button which is selected its value and answer value both matching or not-----*/
function checkAnswer() {
  $("main").on("click", "#button-submit", function (event) {
    if ($("input:radio").is(":checked")) {
      event.preventDefault();
      let selectedAnswer = $("input[name=answer]:checked").val();
      console.log(selectedAnswer);
      if (selectedAnswer === QUESTIONS[qno].correctAnswer) {
        score++;
        qno++;
        console.log(score);
        nextQuestion();
      } else if (selectedAnswer != QUESTIONS[qno].correctAnswer) {
        nextQuestion();
      }
    } else {
      alert("Please select an valid answer");
      LoadQuestion();
    }
  });
}

function restartQuiz() {
  console.log("Restarting quiz again!");
  $("main").on("click", "#button-restart", function (event) {
    console.log("restart button clicked");
    score = 0;
    qno = 0;
    $(".answer").empty();
    $(".quiz-form").empty();
    $(".start-quiz").show();
  });
}

function displayResults() {
  console.log("display result called");
  $(".answer").append(`<h2>Quiz Results</h2>
    <h3>${score}%</h3>
    <p>You got <span class="right-answers">${score} </span>out of 5 questions right.</p>
    <button type="button" id ="button-restart">Start Quiz</button>`);
}

function callQuizAap() {
  startQuiz();
  checkAnswer();
  nextQuestion();
  restartQuiz();
}

$(callQuizAap);
