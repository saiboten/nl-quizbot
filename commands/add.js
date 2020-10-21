const { addQuestion } = require("../state/questionstore");
const tools = require("../functions.js");

module.exports = {
  admin: true,
  name: "add",
  description: "Legg til ny oppgave/video i quizen",
  usage: "add <url>",
  args: true,
  execute(message, args) {
    if (tools.isAllowedToIssueCommand(message)) {
      console.log("Legger til oppgave");
      addQuestion(args.join(" "));
      message.reply(`La til oppgave med innhold: ${args.join(" ")}`);
    }
  },
};
