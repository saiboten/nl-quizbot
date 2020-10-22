import { CommandType } from "../types";
import { deleteQuestion } from "../state/questionstore";

const command: CommandType = {
  admin: true,
  name: "remove",
  description: "Fjern video",
  usage: "remove <id>",
  args: true,
  pmOnly: true,
  supportedStates: ["PREPARATION"],
  execute(message, args) {
    try {
      deleteQuestion(parseInt(args[0]));
      message.reply("Oppgave slettet");
    } catch (e) {
      message.reply("Noe gikk fryktelig galt. Sikker på at du har riktig id?");
    }
  },
};

module.exports = command;
