const { ChatInputCommandInteraction, EmbedBuilder, Colors } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param { ChatInputCommandInteraction } interaction 
     */
    execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

      // If the command is no longer executable then,
        const command = client.commands.get(interaction.commandName);
        if(!command) return interaction.reply({
            content: " ",
            ephemeral: true,
            embeds: [new EmbedBuilder()
            .setColor(Colors.Yellow)
            .setDescription("🧐 This command is outdated.")
        ]});

      // If user is not the real bot developer then,
        if(command.developer && interaction.user.id !== "YOUR USER ID") return interaction.reply({
            content: " ",
            ephemeral: true,
            embeds: [new EmbedBuilder()
            .setColor(Colors.Yellow)
            .setDescription("🔧 This Command is only available to the developer.")
        ]});

        command.execute(interaction, client);
    }
}

// Credits to Puppettu#9013 & Jermayn#2393
// Please do not remove credits lmfao says Jermayn
// This is more complicated and prettier with Embeds!
