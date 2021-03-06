import { CommandType } from "../types";
import { endQuiz } from "../state/state";

const command: CommandType = {
  admin: true,
  name: "end",
  description: "Avslutt quiz",
  supportedStates: ["STARTED"],
  execute(message) {
    endQuiz();
    message.reply("Quiz avsluttet!");
  },
};

module.exports = command;
