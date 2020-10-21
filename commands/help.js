const { endQuiz } = require("../state/state");

module.exports = {
  admin: true,
  name: "help",
  description: "Hjelp",
  execute(message) {
    endQuiz();
    message.reply(
      "Her er noen kommandoer: !quiz listvideos. !quiz solved, !quiz unsolved"
    );
  },
};
