import { CommandType } from "../types";
import { startQuiz } from "../state/state";
import { getQuiz } from "../state/questionstore";

const command: CommandType = {
  admin: true,
  name: "go",
  description: "Nå starter quizen for alvor!",
  pmOnly: true,
  supportedStates: ["PREPARATION"],
  execute(message) {
    startQuiz();
    message.reply(getQuiz().map((quiz) => `#${quiz.id}: ${quiz.content}`));
  },
};

module.exports = command;
