# 📋 Basic Discord Bot - Command/Event Handler V14!
- To those who have issues with common errors like; The application did not respond to you.
- If you have any problem, join Puppettu's [Support Server](https://discord.gg/85vFksTpX7) via Discord: 

# 🤖 How To Install/Use The Handler?

- 1. Download the code via `.zip` -> [📦 Download Here](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14/archive/refs/heads/main.zip)
- 2. Install all the required packages -> [🗃️ Installing Packages](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14#%EF%B8%8F-installing-packages)
- 3. Change some basic stuffs like; `bot_token` & `database_url` & `developer_id` -> [🪛 Changing Some Stuff](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14#-changing-some-stuff)
- 4. Now run the bot 'cause you're done -> [👾 Starting The Bot](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14#-starting-the-bot)
- 5. Support me by giving a "`⭐`" to this repo + Reach out thru [my socials](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14#-useful-links)

# 🗃️ Installing Packages:
- `npm install discord.js` - Installs the Discord.JS package
- `npm install ascii-table` - Allows the console to log the events in a table
- `npm init -y`- Installs all the required packages
- `npm install glob` - Glob package
- `npm install mongoose` - To continue using database (MONGODB)

# 🪛 Changing Some Stuff:
- in [config.json](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14/config.json) file, change "BOT TOKEN" with your bot's token, if you have Mongo, then replace "DatabaseURL" with your mongoose url.
- Trouble Connecting to MongoDB? Watch this video [here](https://www.youtube.com/watch?v=BEkyfqlbVRw) and follow the steps.
- in [slashCommands.js](https://github.com/Puppettu/DiscordJS-Command-and-Event-Handler-V14/Events/Interactions/slashCommands.js) file, change Line:21 "YOUR USER ID" with your own id, because it's the bot developer's ID. If the bot has multiple developers, then continue with: `(command.developer && interaction.user.id !== "YOUR USER ID" || command.developer && interaction.user.id !== "2ND OWNER" || command.developer && interaction.user.id !== "3RD OWNER)"`

# 👾 Starting The Bot:
- `node .` or `node index.js`

# 🔗 Useful Links:
- Check out Puppettu's [YouTube Channel](https://www.youtube.com/channel/UCR93KA0vxdmXKhY-RDPrwbg)
- Check out Puppettu's [Discord Server](https://discord.gg/85vFksTpX7)

# 🤝🏻 Thank you for reading!
- Credits to `@Puppettu#9013` :3
- Please `STAR ⭐` this repository as I'll be updating this repository `every 2 weeks`! So you don't miss out!!
