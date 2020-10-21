const { endQuiz } = require("../state/state");

module.exports = {
  admin: true,
  name: "end",
  description: "Avslutt quiz",
  execute(message) {
    endQuiz();
    message.reply("Quiz avsluttet!");
  },
};
