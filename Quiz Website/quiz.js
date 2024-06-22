function toggleMenu() {
  const navUl = document.querySelector('nav ul');
  navUl.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', () => {
  const questions = {
      html: [
          {
              question: "What does HTML stand for?",
              options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Marking Language"],
              answer: 0
          },
          {
              question: "Who is making the Web standards?",
              options: ["Mozilla", "Microsoft", "Google", "The World Wide Web Consortium"],
              answer: 3
          },
          {
              question: "Which HTML attribute is used to specify an alternate text for an image, if the image cannot be displayed?",
              options: ["title","alt","src","href" ],
              answer: 1
          },
          {
              question: "Which HTML attribute is used to define inline styles?",
              options: ["class","style","font","styles"],
              answer: 1
          },
          {
              question: "What is the purpose of the <meta> tag in HTML?",
              options: ["To create a paragraph","To embed images","To provide metadata about the HTML document ","To create links to other documents"],
              answer: 2
          }
      ],
      css: [
          {
              question: "What does CSS stand for?",
              options: ["Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"],
              answer: 3
          },
          {
              question: "Where in an HTML document is the correct place to refer to an external style sheet?",
              options: ["At the end of the document", "In the <head> section", "At the top of the document", "In the <body> section"],
              answer: 1
          },
          {
              question: "Which HTML attribute is used to define inline styles?",
              options: ["styles", "style", "class", "font"],
              answer: 1
          },
          {
              question: "Which is the correct CSS syntax?",
              options: ["body {color: black;}", "{body:color=black;}", "{body;color:black;}", "body:color=black;"],
              answer: 0
          },
          {
              question: "How do you insert a comment in a CSS file?",
              options: ["// this is a comment", "/* this is a comment */", "// this is a comment //", "' this is a comment"],
              answer: 1
          }
      ],
      javascript: [
          {
              question: "What is the correct JavaScript syntax to change the content of the HTML element below? <br> <code>&lt;p id='demo'&gt;This is a demonstration.&lt;/p&gt;</code>",
              options: ["document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';"],
              answer: 0
          },
          {
              question: "Where is the correct place to insert a JavaScript?",
              options: ["The <head> section", "The <body> section", "Both the <head> section and the <body> section are correct", "The <footer> section"],
              answer: 2
          },
          {
              question: "Which of the following is not a way to create an object in JavaScript?",
              options: ["Using object literal notation { }","Using the new Object() syntax","Using Object.create()","Using new object()"],
              answer: 3
          },
          {
              question: "How do you write 'Hello World' in an alert box?",
              options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
              answer: 3
          },
          {
              question: "How do you create a function in JavaScript?",
              options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "function => myFunction()"],
              answer: 2
          }
      ],
      python: [
          {
              question: "What is the correct file extension for Python files?",
              options: [".pyth", ".pt", ".py", ".pyt"],
              answer: 2
          },
          {
              question: "How do you create a variable with the numeric value 5?",
              options: ["x = 5", "x == 5", "x : 5", "x <- 5"],
              answer: 0
          },
          {
              question: "What is the correct way to create a function in Python?",
              options: ["function myFunction():", "create myFunction():", "def myFunction():", "function:myFunction()"],
              answer: 2
          },
          {
              question: "Which method can be used to remove any whitespace from both the beginning and the end of a string?",
              options: ["strip()", "ptrim()", "len()", "trim()"],
              answer: 0
          },
          {
              question: "What is the correct syntax to output the type of a variable or object in Python?",
              options: ["print(typeof(x))", "print(type(x))", "print(typeOf(x))", "print(typeOf x)"],
              answer: 1
          }
      ]
  };

  const currentSubject = document.title.split(' ')[0].toLowerCase(); // e.g., "html" from "HTML Quiz"
  const currentQuestions = questions[currentSubject];
  let currentQuestionIndex = 0;
  let score = 0;

  const questionElement = document.querySelector('.question');
  const optionsElement = document.querySelectorAll('.option');
  const nextButton = document.getElementById('next-btn');

  function loadQuestion() {
      const currentQuestion = currentQuestions[currentQuestionIndex];
      questionElement.innerHTML = currentQuestion.question;
      optionsElement.forEach((option, index) => {
          option.innerHTML = currentQuestion.options[index];
          option.onclick = () => selectOption(index);
      });
  }

  function selectOption(selectedIndex) {
      const correctIndex = currentQuestions[currentQuestionIndex].answer;
      if (selectedIndex === correctIndex) {
          score++;
          optionsElement[selectedIndex].style.backgroundColor = 'green';
      } else {
          optionsElement[selectedIndex].style.backgroundColor = 'red';
      }
      optionsElement.forEach((option, index) => {
          if (index !== selectedIndex) {
              option.disabled = true;
          }
      });
  }

  nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < currentQuestions.length) {
          loadQuestion();
          optionsElement.forEach(option => {
              option.style.backgroundColor = '#007BFF';
              option.disabled = false;
          });
      } else {
          showResults();
      }
  });

  function showResults() {
      questionElement.innerHTML = `You scored ${score} out of ${currentQuestions.length}`;
      document.querySelector('.options').style.display = 'none';
      nextButton.style.display = 'none';
  }

  loadQuestion();
});
