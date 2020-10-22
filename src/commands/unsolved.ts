import { CommandType } from "../types";
import { getQuiz } from "../state/questionstore";

const command: CommandType = {
  name: "unsolved",
  description: "List ut uløste oppgaver",
  pmOnly: true,
  execute(message) {
    const solved = getQuiz()
      .filter((el) => !el.solved)
      .map((el) => {
        return `${el.id}: ${el.content}`;
      });
    message.reply(`Uløste oppgaver: ${solved}`);
  },
};

module.exports = command;
