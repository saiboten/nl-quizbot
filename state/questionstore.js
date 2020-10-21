let quiz = [];

function addQuestion(content) {
  quiz.push({ id: quiz.length + 1, content });
}

function deleteQuestion(id) {
  quiz = quiz.filter((el) => el.id !== id);
}

function markSolved(id, answer, solvedBy) {
  var newQuizList = quiz.map((el) => {
    if (el.id === id) {
      return {
        ...el,
        answer,
        solved: true,
        solvedBy,
      };
    }
    return el;
  });

  console.log("new quiz list?", newQuizList);

  quiz = newQuizList;
}

function getQuiz() {
  return quiz;
}

module.exports = {
  getQuiz,
  addQuestion,
  deleteQuestion,
  markSolved,
};
