const { MessageCommandBuilder, InteractionCommandBuilder } = require('reciple');

class Example {
  constructor() {
    this.versions = ['^3.1.4'];
    this.commands = [
      new MessageCommandBuilder()
        .setName('ping')
        .setCooldown(10000)
        .setDescription('Pong!')
        .setExecute(execute => execute.message.reply("Pong!")),
      new InteractionCommandBuilder()
        .setName('ping')
        .setCooldown(10000)
        .setDescription('Pong!')
        .setExecute(execute => execute.interaction.reply("Pong!"))
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