interface Question {
  id: number;
  content: string;
  answer?: string;
  solved: boolean;
  solvedBy?: string;
}

let quiz: Question[] = [];

export function addQuestion(content: string) {
  quiz.push({ id: quiz.length + 1, content, solved: false });
}

export function deleteQuestion(id: number) {
  quiz = quiz.filter((el) => el.id !== id);
}

export function markSolved(id: number, answer: string, solvedBy: string) {
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

  quiz = newQuizList;
}

export function getQuiz() {
  return quiz;
}
