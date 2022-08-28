const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Will reply with pong."),
    /**
     * 
     * @param { ChatInputCommandInteraction } interaction 
     */
    execute(interaction) {
        interaction.reply({ content: "🏓 Pong!", ephemeral: true })
    }
}

// Credits to Puppettu#9013 & Jermayn#2393
// Please do not remove credits lmfao says Jermayn
