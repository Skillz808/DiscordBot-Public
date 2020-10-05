const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "whois",
    description: "Shows the information of a member",
    execute(message, args) {
        if (message.channel.type === 'dm') return message.channel.send("Sorry, I cannot do this command in a DM");
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

        if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
        if (member.presence.status === 'online') member.presence.status = 'Online';
        if (member.presence.status === 'idle') member.presence.status = 'Idle';
        if (member.presence.status === 'offline') member.presence.status = 'Offline';

        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const created = Math.floor(x / 86400000);
        const joined = Math.floor(y / 86400000);

        const joineddate = moment.utc(member.joinedAt).format("D MMMM YYYY h:mm:ss")
        const createddate = moment.utc(member.user.createdAt).format("D MMMM YYYY h:mm:ss")
        let status = member.presence.status;

        const userEmbed = new Discord.MessageEmbed()
            .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RED')
            .setImage(member.user.displayAvatarURL({ dynamic: true }))
            .addField("Member ID", member.id)
            .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
            .addField('Created on', `${createddate}`)
            .addField('Joined the server on', `${joineddate} \n> ${joined} Day's Ago`)
            .addField("Status", status)

        message.channel.send(userEmbed);
    }
}

