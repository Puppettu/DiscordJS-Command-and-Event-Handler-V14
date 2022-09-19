const { ChatInputCommandInteraction, Client, EmbedBuilder, Colors } = require('discord.js');
const { loadEvents } = require('../../../Handlers/eventHandler');

module.exports = {
    subCommand: "reload.events",
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {
        for(const [key, value] of client.events) client.removeListener(`${key}`, value, true);
                loadEvents(client);
                interaction.reply({
                    content: " ",
                    ephemeral: true,
                    embeds: [new EmbedBuilder()
                    .setColor(Colors.Green)
                    .setDescription("🔃 Events have been reloaded.")
                ]});
    }
}
