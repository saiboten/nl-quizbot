const { startQuiz } = require("../state/state");

module.exports = {
  admin: true,
  name: "start",
  description: "Start quiz",
  execute(message) {
    startQuiz();
    message.reply("Quiz startet!");
  },
};
