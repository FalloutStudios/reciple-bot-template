import { ContextMenuCommandBuilder, MessageCommandBuilder, SlashCommandBuilder } from 'reciple';
import { ApplicationCommandType, AttachmentBuilder } from 'discord.js';

/**
 * @type {import('reciple').RecipleModuleScript}
 */
export default {
  versions: ['^7'], // Module supports reciple client version 7
  commands: [
    // Right click a message to execute command
    new ContextMenuCommandBuilder()
      .setName(`Avatar`)
      .setType(ApplicationCommandType.User)
      .setExecute(async data => data.interaction.reply({
        files: [
          new AttachmentBuilder((data.interaction.targetMember || data.interaction.targetUser).displayAvatarURL({
            size: 1024
          }))
        ]
      })),

    // Send !ping to execute command
    new MessageCommandBuilder()
      .setName(`ping`)
      .setAliases(`p`)
      .setDescription(`Ping command`)
      .setExecute(async data => data.message.reply(`Pong!`)),

    // Use /ping to execute command
    new SlashCommandBuilder()
      .setName(`ping`)
      .setDescription(`Pong command`)
      .setExecute(async data => data.interaction.reply(`Pong!`))
  ],

  /** 
   * @param {import('reciple').RecipleClient} client
   */
  onStart(client) {
    return true;
  },

  /** 
   * @param {import('reciple').RecipleClient} client
   * @param {import('reciple').RecipleModule} module
   */
  onLoad(client, module) { },

  /** 
   * @param {import('reciple').RecipleModuleScriptUnloadData} client
   */
  onUnload(data) { }
};
