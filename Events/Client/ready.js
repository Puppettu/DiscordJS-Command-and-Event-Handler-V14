const { loadCommands } = require("../../Handlers/commandHandler");

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`Client logged in as ${client.user.username}`);
        client.user.setActivity(`in ${client.guilds.cache.size} guild(s)`);

        loadCommands(client);
    }
}

// Credits to Puppettu#9013 & Jermayn#2393
// Please do not remove credits lmfao says Jermayn
