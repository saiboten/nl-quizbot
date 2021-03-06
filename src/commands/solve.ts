import { CommandType } from "../types";
import { markSolved } from "../state/questionstore";

const command: CommandType = {
  name: "solve",
  description: "Marker en oppgave som løst",
  usage: "addvideo <id> <discord-bruker-tag> <correctanswer>",
  args: true,
  admin: true,
  supportedStates: ["STARTED"],
  execute(message, args) {
    const [id, user, ...answerArray] = args;
    const answer = answerArray.join(" ");
    markSolved(parseInt(id), answer, user);
    message.channel.send(
      `Oppgave ${id} er løst av ${user}. Riktig svar: ${answer} \:raised_hands:`
    );
  },
};

module.exports = command;
