let { getQuiz } = require("../state/questionstore");

module.exports = {
  name: "unsolved",
  description: "List ut uløste oppgaver",
  execute(message) {
    const solved = getQuiz()
      .filter((el) => !el.solved)
      .map((el) => {
        return `${el.id}: ${el.content}`;
      });
    message.reply(`Uløste oppgaver: ${solved}`);
  },
};
