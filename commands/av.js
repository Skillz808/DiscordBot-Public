module.exports = {
    name: 'av',
    description: "A simple avatar grabbing command",
    execute(message, args) {
        if (!message.mentions.users.first()) {
            message.channel.send(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        } else {
            let User = message.mentions.users.first()
            message.channel.send(User.displayAvatarURL({ dynamic: true, size: 256 }))
        }
    }
}
