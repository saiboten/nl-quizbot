const { endQuiz } = require("../state/state");
const tools = require("../tools.js");

module.exports = {
  admin: true,
  name: "end",
  description: "Avslutt quiz",
  execute(message) {
    endQuiz();
    message.reply("Quiz avsluttet!");
  },
};
