const Discord = require("discord.js");
const bot = new Discord.Client();
const { prefix, token, bot_info } = require('./config.json')
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag},`, `In ${bot.guilds.cache.size} Servers!`);
  bot.user.setActivity("!help", { type: 'LISTENING' }).catch(console.error);
})

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.toLowerCase().slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    bot.commands.get('ping').execute(message, args);
  } else if (command === "help") {
    bot.commands.get('help').execute(message, args);
  } else if (command === "info") {
    bot.commands.get('info').execute(message, args);
  } else if (command === "membercount") {
    bot.commands.get('membercount').execute(message, args);
  } else if (command === "av") {
    bot.commands.get('av').execute(message, args);
  } else if (command === "whois") {
    bot.commands.get('whois').execute(message, args);
  } else if (command === "purge") {
    bot.commands.get('purge').execute(message, args);
  }
});

bot.login(token);
