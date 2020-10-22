import Discord from "discord.js";
import fs from "fs";
import { CommandType } from "./types";

import { prefix, token } from "./config.json";
import { isAllowedToIssueCommand } from "./tools";

import { state } from "./state/state";

const client = new Discord.Client();
const allCommands = new Discord.Collection<string, CommandType>();

const commandFiles = fs
  .readdirSync("./src/commands")
  .filter((file: any) => file.endsWith(".js") || file.endsWith(".ts"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  allCommands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args?.shift()?.toLowerCase() || "";

  const commands = allCommands.filter((m) => m.supportedStates.includes(state));

  if (!commands.has(commandName)) {
    return;
  }

  const unknownCommand: CommandType = {
    name: "unknown",
    execute: () => {},
    description: "",
    supportedStates: [],
  };

  const command = commands.get(commandName) || unknownCommand;

  if (command.admin && !command.pmOnly && !isAllowedToIssueCommand(message)) {
    console.log("Ingen tilgang til kommando");
    message.reply("Du har ikke tilgang til å kjøre denne kommandoen");
    return;
  }

  if (command.name === "unknown") {
    console.log("Ukjent kommando");
    message.reply("Ukjent kommando");
    return;
  }

  if (command.pmOnly && message.channel.type !== "dm") {
    console.log("This command only availabe in pm");
    return;
  }

  if (command.args && !args.length) {
    let reply = `Du mangler informasjon i kommandoen!`;

    if (command.usage) {
      reply += `\nDen riktige bruk av denne kommandoen er: \`${prefix} ${command.name} ${command.usage}\``;
    }
    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.login(token);
