let quizData = [
    {
        question: "Enter your class 9th Percentage Grades to percentage\n" + "A1 / A+ : 91%-100% : 9.5\n" + "A2 / A : 81%-90% : 8.5\n" + "B1 / B : 71%-80% : 7.5\n" + "B2 / C : 61%-70% : 6.5\n", 
        a: "9.5",
        b: "8.5",
        c: "7.5",
        d: "6.5",
        //correct: "a,b,c,d",
    },
    {
        question: "Enter your class 10th Percentage Grades to percentage\n" + "A1 / A+ : 91%-100% : 9.5\n" + "A2 / A : 81%-90% : 8.5\n" + "B1 / B : 71%-80% : 7.5\n" + "B2 / C : 61%-70% : 6.5\n", 
        a: "9.5",
        b: "8.5",
        c: "7.5",
        d: "6.5",
       // correct: "a,b,c,d",
    },

    {
        question: "IF ABC is a right-angled triangle at B and AB =4K and BC = 3K. What is the angle ABC?d?",
        a: "+2",
        b: "+10",
        c: "-10",
        d: "-2",
        correct: "c",
    },

    {
        question: "Find the value of “p” from the polynomial x2 + 3x + p, if one of the zeroes of the polynomial is 2.",
        a: "37",
        b: "53",
        c: "30",
        d: "60",
        correct: "b",
    },

    {
        question: "One card is drawn from a well-shuffled deck of 52 cards. Calculate the probability that the card will be an ace of black colour",
        a: "1/26",
        b: "1/52",
        c: "1/17",
        d: "1/13",
        correct: "a",
    },


    {
        question: "Who is the Father of periodic table?",
        a: "Neil Bohr",
        b: "Henry Moseley",
        c: "Dmitri Mendeleev",
        d: "Albert Einstein",
        correct: "c",
    },


    {
        question: "When an organism breaks into multiple parts and each part can grow into new organism, it is called?",
        a: "Budding",
        b: "Fission",
        c: "Spore Formation",
        d: "Regeneration",
        correct: "d",
    },

    {
        question: "A voltage in parallel line is 220V. Resistance in every line 5 ohm. Find Current (I) in the current line.?",
        a: "40",
        b: "45",
        c: "50",
        d: "55",
        correct: "b",
    },

    {
        question: "Which Country was part of thee axis power in world war one?",
        a: "Japan",
        b: "Mexico",
        c: "USA",
        d: "France",
        correct: "a",
    },

    {
        question: "Who was India's First female president?",
        a: "Indira Gandhi",
        b: "Venkaiyah Naidu",
        c: "Pratibha Patil",
        d: "Sushma Swaraj",
        correct: "a",
    },

    {
        question: "On which type of transaction system are transactions based?",
        a: "Barter Transactions",
        b: "Plastic Transactions",
        c: "Paper Transactions",
        d: "none",
        correct: "a",
    },


    {
        question: "What is another name for opportunity cost in economics?",
        a: "Economic Problem",
        b: "Marginal Cost",
        c: "Economic Cost",
        d: "Toatal Cost",
        correct: "a",
    },

    {
        question: "What is the end product of financial accounting?",
        a: "Financial Statements",
        b: "Cost Accounting",
        c: "Management Accounting",
        d: "Book Keeping",
        correct: "a",
    },


    {
        question: "Which of the following is not a type of entrepreneurship?",
        a: "Startup Entrepreneurship",
        b: "Small Scale Entrepreneurship",
        c: "Innovation Entrepreneurship",
        d: " State Entrepreneurship",
        correct: "d",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})