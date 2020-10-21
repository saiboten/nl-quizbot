const { addQuestion } = require("../state/questionstore");

module.exports = {
  admin: true,
  name: "add",
  description: "Legg til ny oppgave/video i quizen",
  usage: "add <url>",
  args: true,
  execute(message, args) {
    console.log("Legger til oppgave");
    addQuestion(args.join(" "));
    message.reply(`La til oppgave med innhold: ${args.join(" ")}`);
  },
};
