const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')

module.exports = {
    name: 'help',
    description: "A simple help command",
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("All Commands.")
            .addField("!ping", "Sends a message showing the current ping of the bot.")
            .addField("!info", "Send an embed showing the name and current version of the bot, along with the bot's avatar.")
            .addField("!membercount", "Sends a message telling the total number of members in the server.")
            .addField("!av", "Sends the avatar image of you or someone you ping in the message.")
            .addField("!whois", "Sends an embed containing information about the user like the day they joined the server for example.")
            .addField("!purge", "Mass deletes messages, from 2 - 100 messages at a time, **Note: messages cant be deleted this way if they are over 2 weeks old.**")
        message.channel.send(embed);
    }
}




