const { deleteQuestion } = require("../state/questionstore");

module.exports = {
  admin: true,
  name: "remove",
  description: "Fjern video",
  usage: "remove <id>",
  args: true,
  execute(message, args) {
    try {
      deleteQuestion(parseInt(args[0]));
      message.reply("Oppgave slettet");
    } catch (e) {
      message.reply("Noe gikk fryktelig galt. Sikker på at du har riktig id?");
    }
  },
};
