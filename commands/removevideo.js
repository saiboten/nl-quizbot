const tools = require("../functions.js");

module.exports = {
  admin: true,
  name: "removevideo",
  description: "Fjern video",
  usage: "addvideo <id>",
  execute(message) {
    if(tools.isAllowedToIssuecommand(message)) {
      // TODO
    }
  },
};
