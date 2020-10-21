const { endQuiz } = require("../state/state");
const tools = require("../functions.js");

module.exports = {
  admin: true,
  name: "end",
  description: "Avslutt quiz",
  execute(message) {
    if (tools.isAllowedToIssueCommand(message)) {
      endQuiz();
      message.reply("Quiz avsluttet!");
    }
  },
};
