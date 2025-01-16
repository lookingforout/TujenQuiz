document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
      {
        question: "Как се превежда 'аз съм' на немски?",
        options: ["Du bist", "Ich bin", "Er ist"],
        correct: 1
      },
      {
        question: "Какво означава 'essen' на немски?",
        options: ["Ям", "Пия", "Спя"],
        correct: 0
      },
      {
        question: "Как е 'куче' на немски?",
        options: ["Wurm", "Tiere", "Hund"],
        correct: 2
      },
      {
        question: "Какво означава 'freunde' на немски?",
        options: ["Приятели", "Врагове", "Някои"],
        correct: 0
      },
      {
        question: "Какъв е правилният въпрос за 'Как се казваш?' на немски?",
        options: ["Wie geht's?", "Wie heißt du?", "Woher kommst du?"],
        correct: 1
      }
    ];

    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
    
        const questionTitle = document.createElement('p');
        questionTitle.innerHTML = `${index + 1}. ${item.question}`;
        questionElement.appendChild(questionTitle);
    
        item.options.forEach((option, i) => {
          const label = document.createElement('label');
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = `question${index}`;
          input.value = i;
          label.appendChild(input);
          label.appendChild(document.createTextNode(option));
          questionElement.appendChild(label);
        });
    
        quizForm.appendChild(questionElement);
      });
    
      document.getElementById('check-btn').addEventListener('click', () => {
        let correctAnswers = 0;
    
        quizData.forEach((item, index) => {
          const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
          if (selectedOption && parseInt(selectedOption.value) === item.correct) {
            correctAnswers++;
          }
        });
    
        resultDiv.innerHTML = `Отговорил си правилно на ${correctAnswers} от ${quizData.length} въпроса.`;
      });
    }); 