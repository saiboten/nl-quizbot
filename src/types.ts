import Discord from "discord.js";

export interface CommandType {
  description: string;
  admin?: boolean;
  args?: boolean;
  pmOnly?: boolean;
  usage?: string;
  name: string;
  execute: (message: Discord.Message, args: string[]) => void;
}
