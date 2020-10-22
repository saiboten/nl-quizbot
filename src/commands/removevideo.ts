import { CommandType } from "../types";

const command: CommandType = {
  admin: true,
  name: "removevideo",
  description: "Fjern video",
  usage: "addvideo <id>",
  pmOnly: true,
  execute(message) {
    // TODO
  },
};

module.exports = command;
