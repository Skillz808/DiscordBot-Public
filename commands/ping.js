const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: "A simple ping command",
    execute(message, args) {
        var ping = Date.now() - message.createdTimestamp;
        const embed = new Discord.MessageEmbed()
            .setTitle("Ping!")
            .setTimestamp()
            .setColor("GREEN")
            .addField("The current ping is:", `${ping}` + "ms")
        message.channel.send(embed);
    }
}


