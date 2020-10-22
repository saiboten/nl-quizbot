import { CommandType } from "../types";
const { deleteQuestion } = require("../state/questionstore");

const command: CommandType = {
  admin: true,
  name: "remove",
  description: "Fjern video",
  usage: "remove <id>",
  args: true,
  pmOnly: true,
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
