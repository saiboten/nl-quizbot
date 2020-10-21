const { startQuiz } = require("../state/state");
const tools = require("../functions.js");

module.exports = {
  admin: true,
  name: "start",
  description: "Start quiz",
  execute(message) {
    if (tools.isAllowedToIssueCommand(message)) {
      startQuiz();
      message.reply("Quiz startet!");
    }
  },
};
