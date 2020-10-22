import Discord from "discord.js";

export function isAllowedToIssueCommand(message: Discord.Message) {
  return message?.member?.roles.cache.some(
    (role) => role.name === "Quizmaster"
  );
}
