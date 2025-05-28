// --- CBT Questions Data (Simulated Database) ---
// In a real application, this would come from a backend database.
const cbtQuestions = {
    math: [
        {
            question: "What is the value of 'x' in the equation: 2x + 5 = 15?",
            options: ["A) 5", "B) 10", "C) 20", "D) 25"],
            answer: "A) 5"
        },
        {
            question: "Simplify: (a + b)²",
            options: ["A) a² + b²", "B) a² + 2ab + b²", "C) a² - b²", "D) a² + ab + b²"],
            answer: "B) a² + 2ab + b²"
        },
        {
            question: "What is the area of a circle with radius 7cm? (Use π = 22/7)",
            options: ["A) 44 cm²", "B) 88 cm²", "C) 154 cm²", "D) 220 cm²"],
            answer: "C) 154 cm²"
        },
        {
            question: "Calculate the volume of a cuboid with length 5cm, width 3cm, and height 2cm.",
            options: ["A) 10 cm³", "B) 15 cm³", "C) 30 cm³", "D) 60 cm³"],
            answer: "C) 30 cm³"
        },
        {
            question: "If a = 4 and b = 5 . find ab.",
            options: ["A) 15", "B) 17", "C) 18", "D) 20"],
            answer: "D) 20"
        }
    ],
    english: [
        {
            question: "Which of the following is a synonym for 'benevolent'?",
            options: ["A) Cruel", "B) Kind", "C) Angry", "D) Weak"],
            answer: "B) Kind"
        },
        {
            question: "Identify the pronoun in the sentence: 'She quickly ran to the store.'",
            options: ["A) quickly", "B) ran", "C) She", "D) store"],
            answer: "C) She"
        },
        {
            question: "Choose the correct spelling:",
            options: ["A) accomodate", "B) accommodate", "C) acommodate", "D) accomodatte"],
            answer: "B) accommodate"
        },
        {
            question: "Which of these is an example of an idiom?",
            options: ["A) The cat sat on the mat.", "B) It's raining cats and dogs.", "C) The dog barked loudly.", "D) She smiled beautifully."],
            answer: "B) It's raining cats and dogs."
        },
        {
            question: "What is the plural of 'child'?",
            options: ["A) childs", "B) children", "C) childes", "D) childen"],
            answer: "B) children"
        }
    ],
    physics: [
        {
            question: "What is the SI unit of force?",
            options: ["A) Joule", "B) Watt", "C) Newton", "D) Pascal"],
            answer: "C) Newton"
        },
        {
            question: "Which of the following is a scalar quantity?",
            options: ["A) Velocity", "B) Acceleration", "C) Force", "D) Mass"],
            answer: "D) Mass"
        },
        {
            question: "According to Ohm's Law, V = ?",
            options: ["A) I/R", "B) R/I", "C) I * R", "D) I + R"],
            answer: "C) I * R"
        },
        {
            question: "What is the phenomenon of light bending as it passes from one medium to another?",
            options: ["A) Reflection", "B) Refraction", "C) Diffraction", "D) Dispersion"],
            answer: "B) Refraction"
        },
        {
            question: "Which of the following is a renewable energy source?",
            options: ["A) Coal", "B) Natural Gas", "C) Solar Power", "D) Uranium"],
            answer: "C) Solar Power"
        }
    ],
    civic	:[
        {
	            question: "The three main domains of learning are psychomotor,affective and.....",
	            options: ["A) Cognitive", "B) Psychology", "C) Command", "D) Pleasure"],
	            answer: "A) Cognitive"
	    },
	    {
	            question: "Citizenship education will not help to achieve which of the following.....",
	            options: ["A) National unity", "B) Education of youth", "C) Moral decadence", "D) Promoting democracy "],
	            answer: "A) Moral decadence"
	    },
	    {
	            question: "Discipline is described as the....",
	            options: ["A) Ability to show hospitality", "B) State or quality of being brave ", "C) Tendency to fight ", "D) Ability to behave in an acceptable manner "],
	            answer: "D) Ability to behave in an acceptable manner"
	    },
	    {
                question: "A Responsible parent is someone who....",
                options: ["A) Cares and provides for the children", "B) Indulges the children because of love....", "C) Works in order to receive salary", "D) Employs house helps to take 	care of the children "],
                answer: "A) Cares and provides for the children"
	    },
	    {
                question: "A major way of promoting responsible parenthood is through..... ",
                options: ["A) Sex education", "B) Sound education", "C) Population control measures", "D) Tax reduction measures"],
                answer: "A) Sex education"
	    },
	    {
                question: "Responsible parenthood is important because it......",
                options: ["A) Promotes procreation", "B) Foster orderliness", "C) Grooms disciplined children", "D) Provides solution to all societal problems "],
                answer: "C) Grooms disciplined children"
	    },
	    {
                question: "Children that are not cared for are mostly prone to.....",
                options: ["A) Criminal attitudes ", "B) terminal diseases", "C) Examinatins failure", "D) forced migration"],
                answer: "A) Criminal attitudes"
	    },
	    {
                question: "Citizenship education influences an individual to be....",
                options: ["A) Patrotic", "B) Educated", "C) Subservient", "D) Reoriented"],
                answer: "A)Patrotic"
        },
	    {
                question: "Which of the following cannot be easily abused.....",
                options: ["A) Cosmetics", "B) Stimulant", "C) Tobacco", "D) Narcotics"],
                answer: "A) Cosmetics"
	    },
	    {
                questions: "Drug abuse can be prevented in the society by.....",
                options: ["A) Arresting and prosecuting drug vendors", "B) Engaging in public enlightenment", "C) Canvassing capital punishment for drug peddlers", "D) Prohibiting the 	sales of drugs at the motor parks"],
                answer: "B) Engaging in public englightment"
	    },
    ],
    animalHusbandry: [
        {
            question : "The quality of balance diet supplied to an animal per time is described to as ",
            options : ["A) Succulent ", "B) Ration" ,"C) Silage", "D) Supplement"],
            answer : "B) Ration "
        },
        {
            question : "A Large expanse of land where natural forage is allowed to grow for grazing is called ",
            options : ["A) Farm ", "B) Rangeland" ,"C) Plantation", "D) Orchard"],
            answer : "B) Rangeland  "
        },
        {
            question : "Crop grown specifically to serve as food to farm animals are called   ",
            options : ["A) Forages ", "B) Pastures" ,"C) Grasses", "D) Herbages"],
            answer : "A) Forages "
        },
        {
            question : " The factors affecting the growth and development of young animals from birth to maturity include the following except",
            options : ["A) Breed of the animal ", "B) Size of the head" ,"C)Nutritional status", "D)Health status"],
            answer : "B) Size of the head "
        },
        {
            question : "Which of the following is not a method of improving rangeland ",
            options : ["A) Overgrazing ", "B) Rotational grazing " ,"C) Use of fertilizers", "D) Controlled stocking "],
            answer : "A) Overgrazing "
        },
        {
              question : " which of the following is not a sign of approaching paturition ",
              options : ["A) soft paliable and swollen vulva ", "B) Relaxed cervix" ,"C)Full mammary gland", "D) Drop in milk production"],
              answer : "D) Drop in milk production "
        },
        {
            question : " Management practices of establishing pasture include the following except",
            options : ["A) Fencing", "B) Transplanting","C) Replanting", "D) Re-seeding"],
            answer : "A) Fencing "
        },
        {
            question : "The major cause of spoilage in fresh fish is ",
            options : [" A) High humidity", "B) Fungal attack" ,"C) High moisture content", "D) Bacterial attack "],
            answer : "D) Bacterial attack "
        },
        {
            question : " A farmer uses his agricultural loans for the following except ",
            options : [" A) Paying labour wages ", "B) Hiring machines" ,"C) Paying for seeds", "D) Marketing his crops"],
            answer : "D) Marketing his crops"
        },
        {
            question : " The part of the ruminant stomach from where digestive juices are secreted is the",
            options : [" A) Rumen", "B) Omasum" ,"C) Recticulum", "D) Abomasum"],
            answer : "D) Abomasum "
        }
    ],
    // Add more subjects and questions as needed
};

// --- Global Variables (Accessible across test sessions) ---
let currentQuestions = [];
let studentAnswers = [];
let currentQuestionIndex = 0;
let timeLeft = 0; // in seconds
let timerInterval;
let studentInfo = {
    name: '',
    id: '',
    subject: ''
};
let maxTimePerSubject = {
    math: 60 * 5, // 10 minutes
    english: 60 * 5, // 15 minutes
    physics: 60 * 5, // 10 minutes
    chemistry: 60 * 5, // 10 minutes
    biology: 60 * 5 , // 10 minutes
    animalHusbandry: 60 * 5, // 10 minutes
     civic: 60 * 5 //10 minutes
    // Add more subjects and their times
};

// --- Functions for Login Page (index.html) ---
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            const studentName = document.getElementById('studentName').value.trim();
            const studentId = document.getElementById('studentId').value.trim();
            const subject = document.getElementById('subjectSelect').value;

            if (studentName === '' || studentId === '' || subject === '') {
                loginError.textContent = 'Please fill in all fields.';
                return;
            }

            // Store student info in localStorage for access on other pages
            localStorage.setItem('studentName', studentName);
            localStorage.setItem('studentId', studentId);
            localStorage.setItem('selectedSubject', subject);

            // Redirect to the test page
            window.location.href = 'test.html';
        });
    }

    // --- Functions for Test Page (test.html) ---
    const testSubjectElem = document.getElementById('testSubject');
    const timerElem = document.getElementById('timer');
    const currentQuestionNumberElem = document.getElementById('currentQuestionNumber');
    const totalQuestionsElem = document.getElementById('totalQuestions');
    const questionTextElem = document.getElementById('questionText');
    const optionsContainerElem = document.getElementById('optionsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const answerError = document.getElementById('answerError');

    if (testSubjectElem && timerElem && questionTextElem) {
        // Retrieve student info from localStorage
        studentInfo.name = localStorage.getItem('studentName');
        studentInfo.id = localStorage.getItem('studentId');
        studentInfo.subject = localStorage.getItem('selectedSubject');

        if (!studentInfo.name || !studentInfo.id || !studentInfo.subject) {
            // Redirect back to login if info is missing (e.g., direct access to test.html)
            window.location.href = 'testLogin.html';
            return;
        }

        testSubjectElem.textContent = `Subject: ${studentInfo.subject.toUpperCase()}`; // Display subject
        currentQuestions = cbtQuestions[studentInfo.subject];
        studentAnswers = new Array(currentQuestions.length).fill(null); // Initialize student answers array
        totalQuestionsElem.textContent = currentQuestions.length;

        timeLeft = maxTimePerSubject[studentInfo.subject]; // Set time based on subject

        startTimer();
        loadQuestion();

        prevBtn.addEventListener('click', () => {
            saveCurrentAnswer();
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion();
            }
        });

        nextBtn.addEventListener('click', () => {
            saveCurrentAnswer();
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                // If it's the last question and next is clicked, show submit
                saveCurrentAnswer(); // Save the answer for the last question
                handleSubmitTest();
            }
        });

        submitBtn.addEventListener('click', handleSubmitTest);
    }

    // --- Functions for Result Page (result.html) ---
    const resultStudentNameElem = document.getElementById('resultStudentName');
    const resultStudentIdElem = document.getElementById('resultStudentId');
    const resultSubjectElem = document.getElementById('resultSubject');
    const scoreDisplayElem = document.getElementById('scoreDisplay');
    const totalQuestionsDisplayElem = document.getElementById('totalQuestionsDisplay');
    const percentageDisplayElem = document.getElementById('percentageDisplay');
    const gradeCommentElem = document.getElementById('gradeComment');

    if (resultStudentNameElem && scoreDisplayElem) {
        displayResults();
    }
});


function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft %60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! Your test will now be submitted.');
            handleSubmitTest();
        }
    }, 1000);
}

function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('currentQuestionNumber').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('optionsContainer').innerHTML = ''; // Clear previous options
    answerError.textContent = ''; // Clear error message

    question.options.forEach((option, index) => {
        const optionId = `${currentQuestionIndex}_option${index}`;
        const label = document.createElement('label');
        label.setAttribute('for', optionId);
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${currentQuestionIndex}`; // Unique name for each question's radios
        input.id = optionId;
        input.value = option;

        // If student has already answered this question, pre-select their answer
        if (studentAnswers[currentQuestionIndex] === option) {
            input.checked = true;
        }

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        document.getElementById('optionsContainer').appendChild(label);
    });

    updateNavigationButtons();
}

function saveCurrentAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        studentAnswers[currentQuestionIndex] = selectedOption.value;
        answerError.textContent = '';
    } else {
        studentAnswers[currentQuestionIndex] = null; // No answer selected
    }
    console.log('Saved answer for Q' + (currentQuestionIndex + 1) + ': ' + studentAnswers[currentQuestionIndex]);
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').style.display = (currentQuestionIndex === currentQuestions.length - 1) ? 'none' : 'inline-block';
    document.getElementById('submitBtn').style.display = (currentQuestionIndex === currentQuestions.length - 1) ? 'inline-block' : 'none';
}

function handleSubmitTest() {
    clearInterval(timerInterval); // Stop the timer

    // Save the last question's answer before submitting
    saveCurrentAnswer();

    let score = 0;
    for (let i = 0; i < currentQuestions.length; i++) {
        if (studentAnswers[i] === currentQuestions[i].answer) {
            score++;
        }
    }

    // Store results in localStorage to pass to result.html
    localStorage.setItem('finalScore', score);
    localStorage.setItem('totalQuestions', currentQuestions.length);
    localStorage.setItem('studentAnswers', JSON.stringify(studentAnswers)); // Save for potential review
    localStorage.setItem('correctAnswers', JSON.stringify(currentQuestions.map(q => q.answer))); // Save correct answers

    window.location.href = 'result.html';
}

function displayResults() {
    const studentName = localStorage.getItem('studentName');
    const studentId = localStorage.getItem('studentId');
    const subject = localStorage.getItem('selectedSubject');
    const score = parseInt(localStorage.getItem('finalScore') || 0);
    const totalQuestions = parseInt(localStorage.getItem('totalQuestions') || 0);

    document.getElementById('resultStudentName').textContent = studentName;
    document.getElementById('resultStudentId').textContent = studentId;
    document.getElementById('resultSubject').textContent = subject.toUpperCase();
    document.getElementById('scoreDisplay').textContent = score;
    document.getElementById('totalQuestionsDisplay').textContent = totalQuestions;

    const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
    document.getElementById('percentageDisplay').textContent = percentage.toFixed(2);

    const gradeCommentElem = document.getElementById('gradeComment');
    let comment = '';
    let className = '';

    if (percentage >= 70) {
        comment = 'Excellent! Keep up the great work!';
        className = 'excellent';
    } else if (percentage >= 50) {
        comment = 'Good effort! There\'s room for improvement.';
        className = 'good';
    } else if (percentage >= 30) {
        comment = 'Fair attempt. Consider studying more.';
        className = 'average';
    } else {
        comment = 'Needs significant improvement. Review the topics.';
        className = 'poor';
    }
    gradeCommentElem.textContent = comment;
    gradeCommentElem.className = 'grade-comment ' + className; // Apply the class for styling
}

		const menu_toggle = document.querySelector('.menu-toggle');
		const sidebar = document.querySelector('.sidebar');

		menu_toggle.addEventListener('click', () => {
			menu_toggle.classList.toggle('is-active');
			sidebar.classList.toggle('is-active');
		});


// Optional: Function to review answers (requires more HTML on result.html)
// function reviewAnswers() {
//     // Retrieve studentAnswers and correctAnswers from localStorage
//     // Dynamically generate a review section showing question, student answer, and correct answer
//     alert('Review feature not fully implemented in this basic example.');
// }
