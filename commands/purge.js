const { execute } = require("./purge");
const Discord = require('discord.js')

module.exports = {
    name: 'purge',
    description: "A simple command that deletes a group of messages",
    execute(message, args) {
        if (message.channel.type === 'dm') return;
        if (message.deleteable) {
            message.delete();
        }

        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.reply("You don't have the permissions to delete messages").then(message => message.delete({ timeout: 5000 })).catch(err => { throw err });
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("I cant delete 0 messages or there is no number in your command").then(message => message.delete({ timeout: 5000 })).catch(err => { throw err });
        }

        if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
            return message.reply("I don't have the permissions to delete messages").then(message => message.delete({ timeout: 5000 })).catch(err => { throw err });
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleteAmount}\` messages.`)).then(message => message.delete({ timeout: 10000 })).catch(err => { throw err })
            .catch(err => message.reply(`Somthing went wrong ${err}`));
    }
}

