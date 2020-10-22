import { CommandType } from "../types";
import { addQuestion } from "../state/questionstore";

const command: CommandType = {
  admin: true,
  name: "add",
  description: "Legg til ny oppgave/video i quizen",
  usage: "add <url>",
  args: true,
  pmOnly: true,
  supportedStates: ["PREPARATION"],
  execute(message, args) {
    addQuestion(args.join(" "));
    message.reply(`La til oppgave med innhold: ${args.join(" ")}`);
  },
};

module.exports = command;
