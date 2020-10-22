import { states } from "../types";

export let state: states = "IDLE";

export function prepare() {
  state = "PREPARATION";
}

export function startQuiz() {
  state = "STARTED";
}

export function endQuiz() {
  state = "IDLE";
}
