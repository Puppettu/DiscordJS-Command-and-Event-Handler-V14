const { ChatInputCommandInteraction, Client, EmbedBuilder, Colors } = require('discord.js');
const { loadCommands } = require('../../../Handlers/commandHandler');

module.exports = {
    subCommand: "reload.commands",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        loadCommands(client)
                interaction.reply({
                    content: " ",
                    ephemeral: true,
                    embeds: [new EmbedBuilder()
                    .setColor(Colors.Green)
                    .setDescription("🔃 Commands have been reloaded.")
                ]});
    }
}
