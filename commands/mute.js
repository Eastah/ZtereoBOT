const Discord = require('discord.js');
const database = require('../database.json');
module.exports = {
	name: 'mute',
    description: 'Mute a user.',
    args: true,
	execute(message, args) {
        // Help command
        if (!args.length || args[0] == 'help') {
            const embed = new Discord.MessageEmbed()
            .setColor('#00cc00')
            .setTitle('Mute Command Help:')
            .addFields(
                { name: `${database[`${message.guild.id}`]["prefix"]}mute [someone] [time] [reason]`, value: `Mutes the person in the server. **(Ban Members perms required)**` },
            )
            message.channel.send(embed);
            return;
        }
        
        // TODO: make this work with a timeout argument and all, currently crashes.
        if (message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
            const taggedUser = message.mentions.users.first();
            args.shift();
            setTimeout()
            // message.channel.send(`You muted ${taggedUser.username} for reason: ${args}`);
            message.channel.send('the mute command is still WIP and doesnt work')
        } else {
            // message.reply("you don\'t have the permission to do that (Ban Members perms).")
            message.channel.send('the mute command is still WIP and doesnt work, plus you dont have permissions to do that lol')
        }

	},
};