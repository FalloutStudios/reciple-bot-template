const { MessageCommandBuilder, SlashCommandBuilder, CommandBuilderType } = require('reciple');

class Example {
  constructor() {
    this.versions = '^5.4.0';
    this.commands = [
      {
        type: CommandBuilderType.MessageCommand,
        name: 'ping',
        description: 'Pong!',
        options: [],
        cooldown: 1000 * 10,
        excute: e => e.message.reply("Pong!")
      },
      {
        type: CommandBuilderType.SlashCommand,
        name: 'ping',
        description: 'Pong!',
        cooldown: 1000 * 10,
        execute: e => e.interaction.reply("Pong!")
      }
    ];
  }

  onStart(client) {
    client.logger.log("Module started");

    return true;
  }

  onLoad(client) {
    client.logger.log("Module loaded");
  }
}

module.exports = new Example();