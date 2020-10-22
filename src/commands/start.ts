import { CommandType } from "../types";
import { prepare } from "../state/state";

const command: CommandType = {
  admin: true,
  name: "start",
  description: "Start quiz",
  pmOnly: true,
  supportedStates: ["IDLE"],
  execute(message) {
    prepare();
    message.reply("Du kan nå legge til spørsmål til quizen din!");
  },
};

module.exports = command;
