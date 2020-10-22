let state = "IDLE";

function prepare() {
  state = "PREPARATION";
}

function startQuiz() {
  state = "STARTED";
}

function endQuiz() {
  state = "IDLE";
}

module.exports = {
  state,
  startQuiz,
  endQuiz,
};
