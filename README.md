# Lyxcode's Command/Event Handler V14!
- To those who have issues with common errors like; The application did not respond or too lazy to type the handlers from Lyxcode's tutorials.

- Teleport to Lyxcode's Tutorial Playlist: https://www.youtube.com/playlist?list=PLQfxpktrTzhJ4WmZDOTIee3JPVq16DZkX
- If you have any problem, join Lyxcode support server via Discord: https://discord.gg/fSfjHbABJD

- Check out Lyxcode: https://www.youtube.com/c/Lyxcode
- Check out Puppettu: https://discord.gg/85vFksTpX7

# Changing some stuff:
- in [config.json](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14/config.json) file, change "BOT TOKEN" with your bot's token, if you have Mongo, then replace "DatabaseURL" with your mongoose url.
- in [slashCommands.js](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14/Events/Interactions/slashCommands.js) file, change Line:21 "YOUR USER ID" with your own id, because it's the bot developer's ID. If the bot has multiple developers, then continue with: `(command.developer && interaction.user.id !== "YOUR USER ID" || command.developer && interaction.user.id !== "2ND OWNER" || command.developer && interaction.user.id !== "3RD OWNER)"`

# Installing Packages:
- `npm install discord.js` - Installs the Discord.JS package
- `npm install ascii-table` - Allows the console to log the events in a table
- `npm init -y`- Installs all the required packages
- `npm install glob` - Glob package (required to use Promisify)
- `npm install mongoose` - To continue using database (MONGO)

# Start The Bot:
- `node .` or `node index.js`

- Thank you for reading!
- Thanks to @Jermayn#2393 but I edited some parts yes! :3
- STAR this repository as I'll be updating this repository every 2 days! So you don't miss out!!
