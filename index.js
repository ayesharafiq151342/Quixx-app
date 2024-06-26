// quiz.js

// Define your questions, options, and correct answers
const quizData = [
    {
        question: " Pillars of Islam are also called ...?",
        a: " Qadr ul Islam",
        b: "Arkanal Islam",
        c: "Yusuf Islam",
        d: "Fi Amanillah",
        correct: "b"
    },
    {
        question: "A prophet is called .......... in Arabic.",
        a: "Nabi",
        b: "Rasul",
        c: "Wahi",
        d: "None",
        correct: "a"
    },
    {
        question: "You alone we worship and you alone do we ask for help is an ayah from which Surah ?",
        a: "Al-Ikhlas   ",
        b: "Al-Fatihah  ",
        c:" Al-Kawthar  ",
        d: "Al-Asr  ",
        correct: "b"
    },
    {
      question: "While the Prophet and Abu Bakr traveled to Madina, they hid in?",
      a: "Old homes  ",
      b: "Forest  ",
      c: "Desert  ",
      d: "Caves ",
      correct: "d"
  },
  {
    question: "What was the reaction from the elders of Quraysh when Abu Bakr (r.a.) delivered his speech inviting them to Islam ?",
    a: "They all said Takbeer and embraced Islam  ",
    b: "They ran away from him as they didn't want to hear him    ",
    c: "They attacked him and his face started to bleed    ",
    d: "They intelligently questioned him to know more about Islam  ",
    correct: "c"
  }
  ];
  
  // Get references to HTML elements
  const questionBox = document.getElementById('questionbox');
  const option_1 = document.getElementById('option_1');
  const option_2 = document.getElementById('option_2');
  const option_3 = document.getElementById('option_3');
  const option_4 = document.getElementById('option_4');
  const submitButton = document.getElementById('btn');
  const options = document.querySelectorAll('.options');
  
  let currentQuestion = 0;
  let score = 0;
  
  // Load the first question
  loadQuestion();
  
  function loadQuestion() {
    deselectOptions();
    const currentQuizData = quizData[currentQuestion];
    questionBox.innerText = currentQuizData.question;
    option_1.innerText = currentQuizData.a;
    option_2.innerText = currentQuizData.b;
    option_3.innerText = currentQuizData.c;
    option_4.innerText = currentQuizData.d;
  }
  
  function getSelected() {
    let answer = undefined;
    options.forEach((option) => {
        if (option.checked) {
            answer = option.id;
        }
    });
    return answer;
  }
  
  function deselectOptions() {
    options.forEach((option) => {
        option.checked = false;
    });
  }
  
  submitButton.addEventListener('click', () => {
    const answer = getSelected();
  
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
  
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            document.querySelector('.main-box').innerHTML = `
                 <div class="feedback">
                    <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                    <button onclick="location.reload()">Reload</button>
                </div>
            `;
        }
    }
  });
  