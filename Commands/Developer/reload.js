const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, EmbedBuilder, Colors } = require("discord.js");
const { loadCommands } = require("../../Handlers/commandHandler")
const { loadEvents } = require("../../Handlers/eventHandler")

module.exports = {
  // Developer ONLY!
    developer: true,
    data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload your commands/events.")
    .setDefaultMemberPermissions(PermissionFlagsBits.AddReactions)
    .addStringOption((options) => options
    .setName("function")
    .setDescription("Choose the function you want to reload")
    .setRequired(true)
    .addChoices({ name: "events", value: "events" }, { name: "commands", value: "commands" })),
    /**
     * 
     * @param { ChatInputCommandInteraction } interaction 
     * @param { Client } client 
     */
    execute(interaction, client) {
        const choice = interaction.options.getString("function");

        switch(choice) {
            // Reloads all the events
            case "events": {
                for(const [key, value] of client.events) client.removeListener(`${key}`, value, true);
                loadEvents(client);
                interaction.reply({
                    content: " ",
                    ephemeral: true,
                    embeds: [new EmbedBuilder()
                    .setColor(Colors.Green)
                    .setDescription("🔃 Events have been reloaded.")
                ]});
            } break;
            
            // Reloads all the commands without restarting the bot in console
            case "commands": {
                loadCommands(client)
                interaction.reply({
                    content: " ",
                    ephemeral: true,
                    embeds: [new EmbedBuilder()
                    .setColor(Colors.Green)
                    .setDescription("🔃 Commands have been reloaded.")
                ]});
            } break;
        }
    }
}

// Credits to Puppettu#9013 & Jermayn#2393
// Please do not remove credits lmfao says Jermayn
// This is more complicated and prettier with Embeds!
