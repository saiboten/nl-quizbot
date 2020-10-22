import { CommandType } from "../types";
const { endQuiz } = require("../state/state");

const command: CommandType = {
  admin: true,
  name: "help",
  description: "Hjelp",
  pmOnly: true,
  execute(message) {
    endQuiz();
    message.reply(
      "Her er noen kommandoer: !quiz listvideos. !quiz solved, !quiz unsolved"
    );
  },
};

module.exports = command;
