var quiz = [["1 + 1", 2], ["30 * 5", 150], ["100 * 0", 0], ["14 / 2", 7], ["300 / 15", 20]];

document.getElementById("checkBtn").addEventListener("click", checkAnswer);

var checkAnswer = document.getElementById("checkAnswer");

var question = document.getElementById("question");

document.getElementById("next").addEventListener("click", nextQuiz);

function makeQuiz(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // shuffle
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return question.innerHTML = array[0][0];
}

function checkAnswer() {
    var answer = document.getElementById("quizInput");
    if(Number(answer.value) === quiz[0][1]) {
        return checkAnswer.innerHTML = "You are correct!";
    } else {
        return checkAnswer.innerHTML = "Wrong answer!";
    }
}

function nextQuiz() {
    makeQuiz(quiz);
}

makeQuiz(quiz);