const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
// Intents & Partials
const client = new Client({ 
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = require("./Handlers/eventHandler");

client.config = require("./config.json");
client.events = new Collection();
client.subCommands = new Collection(); //subCommands Collection
client.commands = new Collection();

// MongoDB (https://www.youtube.com/watch?v=BEkyfqlbVRw)
//const { connect } = require("mongoose");
//connect(client.config.DatabaseURL, {
//}).then(() => console.log("The client is now connected to the database!"));

loadEvents(client);

// Token (Can be found in config.json)
client.login(client.config.token);
