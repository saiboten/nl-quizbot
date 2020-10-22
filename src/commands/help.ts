import { CommandType } from "../types";
import { endQuiz } from "../state/state";

const command: CommandType = {
  admin: true,
  name: "help",
  description: "Hjelp",
  pmOnly: true,
  supportedStates: ["STARTED"],
  execute(message) {
    endQuiz();
    message.reply(
      "Her er noen kommandoer: !quiz listvideos. !quiz solved, !quiz unsolved"
    );
  },
};

module.exports = command;
