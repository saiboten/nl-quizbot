import { CommandType } from "../types";
import { getQuiz } from "../state/questionstore";

const command: CommandType = {
  admin: true,
  name: "list",
  description: "List videoer",
  pmOnly: true,
  execute(message) {
    const formattedQuiz = getQuiz().map(
      (el) =>
        `Id: ${el.id}. Innhold: ${el.content}. Løst: ${
          el.solved ? "Ja" : "Nei"
        }`
    );

    message.reply(`Lister ut videoer: ${formattedQuiz}`);
  },
};

module.exports = command;
