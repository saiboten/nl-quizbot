import { CommandType } from "../types";
import { getQuiz } from "../state/questionstore";

const command: CommandType = {
  name: "solved",
  description: "List ut løste oppgaver",
  pmOnly: true,
  execute(message) {
    const solved = getQuiz()
      .filter((el) => el.solved)
      .map((el) => {
        return `${el.id}: ${el.content}. Løst av: ${el.solvedBy}`;
      });
    message.reply(`Løste oppgaver: ${solved}`);
  },
};

module.exports = command;
