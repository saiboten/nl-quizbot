let active = false;

function startQuiz() {
  active = true;
}

function endQuiz() {
  active = false;
}

module.exports = {
  active: active,
  startQuiz,
  endQuiz,
};
