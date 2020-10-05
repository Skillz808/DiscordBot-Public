const Discord = require("discord.js");

module.exports = {
    name: 'membercount',
    description: "A simple membercount command",
    execute(message, args) {
        if (message.channel.type === 'dm') return message.channel.send("Sorry, I cannot do this command in a DM");
        const embed = new Discord.MessageEmbed()
            .setTitle("Member Count")
            .addField("Total Members", `${message.guild.memberCount}`)
            .setColor("BLUE")
            .setTimestamp()
        message.channel.send(embed);
    }
}

