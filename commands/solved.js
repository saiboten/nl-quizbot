let { getQuiz } = require("../state/questionstore");

module.exports = {
  name: "solved",
  description: "List ut løste oppgaver",
  execute(message) {
    const solved = getQuiz()
      .filter((el) => el.solved)
      .map((el) => {
        return `${el.id}: ${el.content}. Løst av: ${el.solvedBy}`;
      });
    message.reply(`Løste oppgaver: ${solved}`);
  },
};
