let state = "IDLE";

export function prepare() {
  state = "PREPARATION";
}

export function startQuiz() {
  state = "STARTED";
}

export function endQuiz() {
  state = "IDLE";
}
