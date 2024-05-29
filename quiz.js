const questions = [
    {
        question: " Какой из нижеперечисленных этапов развития бизнеса является первым?",
        choices: ["a) Запуск бизнеса", "b) Расширение бизнеса", "c) Оптимизация бизнеса", "d) Продажа бизнеса"],
        answer: "a"
    },
    {
        question: "Что важно учитывать при определении целевой аудитории вашего бизнеса?",
        choices: ["a)Демографические характеристики ", "b) Потребности и интересы клиентов","c)Поведенческие особенности ","d)Все вышеперечисленное "],
        answer: "d"
    },
    {
        question: "Какие финансовые показатели являются ключевыми для оценки эффективности бизнеса?",
        choices: ["a) Выручка", "b)Прибыль ", "c)ROI (рентабельность инвестиций) ", "d)Все вышеперечисленное "],
        answer: "d"
    },
    {
        question: "Какие стратегии могут помочь увеличить прибыль и обеспечить устойчивый рост бизнеса?",
        choices: ["a) Маркетинговые стратегии ", "b)Оптимизация процессов ", "c) Все перечисленное", "d) Развитие новых продуктов или услуг "],
        answer: "c"
    },
    {
        question: "Какие навыки и качества необходимы для успешного предпринимателя?",
        choices: ["a) Лидерство", "b)Гибкость и умение адаптироваться ", "c)Умение принимать решения ", "d)Все вышеперечисленное "],
        answer: "d"
    },
    {
        question: "Какие инструменты и технологии могут помочь управлять бизнесом и анализировать данные?",
        choices: ["a)CRM-системы ", "b)Аналитические инструменты ", "c)Все перечисленное ", "d)Облачные сервисы "],
        answer: "c"
    },
    {
        question: "Как вы оцениваете конкурентную среду и разрабатываете стратегию конкурентного преимущества?",
        choices: ["a)Анализ конкурентов ", "b)Все перечисленное ", "c) Исследование рынка ", "d)Уникальное предложение "],
        answer: "b"
    },
    {
        question: "Какие метрики вы используете для оценки эффективности стратегий вашего бизнеса?",
        choices: ["a) ROAS (отношение доходов к расходам на рекламу)", "b)LTV (продолжительность жизни клиента)", "c)CAC (стоимость привлечения клиента)  ", "d)Все вышеперечисленное "],
        answer: "d"
    }
];
let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    const question = questions[currentQuestion];
    questionContainer.innerHTML = `<h3>${question.question}</h3>`;
    
    let choicesHtml = "";
    question.choices.forEach(choice => {
        choicesHtml += `<div><input type="radio" name="choice" value="${choice[0]}"> ${choice}</div>`;
    });
    questionContainer.innerHTML += choicesHtml;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="choice"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.innerHTML = `<p>Правильных ответов: ${score} из ${questions.length}</p>`;
}

nextButton.addEventListener("click", checkAnswer);

showQuestion();