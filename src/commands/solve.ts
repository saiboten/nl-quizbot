import { CommandType } from "../types";
const { markSolved } = require("../state/questionstore");

const command: CommandType = {
  name: "solve",
  description: "Marker en oppgave som løst",
  usage: "addvideo <id> <correctanswer> <discord-bruker-tag>",
  args: true,
  admin: true,
  execute(message, args) {
    const [id, user, ...answer] = args;
    markSolved(parseInt(id), answer.join(""), user);
    message.reply(`Markert oppgave ${id} som løst av ${user}.`);
  },
};

module.exports = command;
