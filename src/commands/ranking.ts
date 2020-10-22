import { CommandType } from "../types";

const command: CommandType = {
  name: "ranking",
  description: "Vis nåværende ranking for quiz (på PM)",
  pmOnly: true,
  supportedStates: ["STARTED"],
  execute(message) {
    // TODO
  },
};

module.exports = command;
