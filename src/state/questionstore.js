let quiz = [];

export function addQuestion(content) {
  quiz.push({ id: quiz.length + 1, content });
}

export function deleteQuestion(id) {
  quiz = quiz.filter((el) => el.id !== id);
}

export function markSolved(id, answer, solvedBy) {
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

export function getQuiz() {
  return quiz;
}
