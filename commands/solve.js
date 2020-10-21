const { markSolved } = require("../state/questionstore");
const tools = require("../functions.js");

module.exports = {
  name: "solve",
  description: "Marker en oppgave som løst",
  usage: "addvideo <id> <correctanswer> <discord-bruker-tag>",
  args: true,
  execute(message, args) {
    if (tools.isAllowedToIssueCommand(message)) {
      const [id, user, ...answer] = args;
      markSolved(parseInt(id), answer.join(""), user);
      message.reply(`Markert oppgave ${id} som løst av ${user}.`);
    }
  },
};
