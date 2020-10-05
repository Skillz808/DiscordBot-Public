const { bot_info } = require("../config.json")
const Discord = require("discord.js")

module.exports = {
    name: 'info',
    description: "A simple info command",
    execute(message, bot, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Bot Information")
            .addField("Name", bot_info.name)
            .addField("Version", bot_info.version)
            .addField("Made by", "Skillz#6488")
            .setColor('RED')
            .setThumbnail(message.author.displayAvatarURL())
        message.channel.send(embed);
    }
}

