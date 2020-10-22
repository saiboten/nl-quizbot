import { CommandType } from "../types";
import { startQuiz } from "../state/state";

const command: CommandType = {
  admin: true,
  name: "start",
  description: "Start quiz",
  execute(message) {
    startQuiz();

    // TODO should we list all videos in channel perhaps?

    message.reply("Quiz startet!");
  },
};

module.exports = command;
