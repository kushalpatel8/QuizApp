const questions = [
   

    {
        question: ' Who is the father of Nation of India ?',
        answers: [
            { text: 'Mahatma Ghandhi', correct: true },
            { text: 'S C Bose', correct: false },
            { text: 'Pandit Nehru', correct: false },
            { text: 'B R Ambedkhar', correct: false },
        ]
    },
  
    {
        question: ' Who is father of Consitution of India?',
        answers: [
            { text: 'B R Ambedkhar', correct: true },
            { text: 'Sardar Patel', correct: false },
            { text: 'C Raj Goplachari', correct: false },
            { text: 'Sam Manik Saha', correct: false },
        ]
    },
    {
        question: 'Water man of India:',
        answers: [
            { text: 'Rajendra Prasad', correct: false },
            { text: 'Rajendra Yadhva', correct: false },
            { text: 'Rajendra Singh', correct: true },
            { text: 'Atal Vihari Bajipae', correct: false },
        ]
    },
  
    {
        question: 'Father of Indian Space Program:',
        answers: [
            { text: 'APJ Abdul Kalam', correct: false },
            { text: 'Vikram Sarabhai', correct: true },
            { text: 'Satish Dhawan', correct: false },
            { text: 'None Of these', correct: false },
        ]
    },
    {
        question: 'Article 15 of indian constitution related ?',
        answers: [
            { text: 'Equality', correct: false },
            { text: 'Nirlamb Upnishad', correct: false },
            { text: 'Both Above', correct: true },
            { text: 'None', correct: false },
        ]
    }
  
  
  ];
  
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  const skipButton = document.getElementById('skip-btn');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    skipButton.innerHTML = 'Skip';
    showQuestion();
  
  }
  
  function showQuestion() {
    resetState()
  
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
  
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
  
    });
  
  }
  
  
  
  function resetState() {
  
    nextButton.style.display = "none";
    skipButton.style.display = 'block';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
  
    const selectedBtn = e.target;
    
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
  
    } else {
        selectedBtn.classList.add('incorrect')
  
    }
  
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
  
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block'
  
  
  }

  function handleskip () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
  }
  
  function showScore() {
  
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!!`;
  
    nextButton.innerHTML = "Want to Play Again??"
    nextButton.style.display = 'block'
    skipButton.style.display = 'none';
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
  
  };
  
  
  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
  });
  
  skipButton.addEventListener('click',handleskip);
  
  startQuiz();