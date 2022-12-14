const { CommandBuilderType, CommandHaltReason } = require('reciple');

module.exports = {
  versions: '^5.4.2',
  commands: [
    {
      type: CommandBuilderType.MessageCommand,
      name: 'ping',
      description: 'Pong!',
      cooldown: 1000 * 10,
      execute: e => e.message.reply("Pong!"),
      halt: e => {
        if (e.reason == CommandHaltReason.Error) {
          e.executeData.message.reply(String(e.error));
          return true;
        }
      }
    },
    {
      type: CommandBuilderType.SlashCommand,
      name: 'ping',
      description: 'Pong!',
      cooldown: 1000 * 10,
      execute: e => e.interaction.reply("Pong!"),
      halt: e => {
        if (e.reason == CommandHaltReason.Error) {
          e.executeData.interaction.reply(String(e.error));
          return true;
        }
      }
    }
  ],
  onStart(client) {
    client.logger.log("Module started");

    return true;
  },
  onLoad(client) {
    client.logger.log("Module loaded");
  }
};
