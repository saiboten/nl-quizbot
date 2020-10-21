let { getQuiz } = require("../state/questionstore");

module.exports = {
  admin: true,
  name: "list",
  description: "List videoer",
  execute(message) {
    const formattedQuiz = getQuiz().map(
      (el) =>
        `Id: ${el.id}. Innhold: ${el.content}. Løst: ${
          el.solved ? "Ja" : "Nei"
        }`
    );

    message.reply(`Lister ut videoer: ${formattedQuiz}`);
  },
};