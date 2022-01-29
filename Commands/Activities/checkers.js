const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "checkers",
    description: "Play checker in Discord",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('You need to join a voice channel first!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'checkers').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Checkers.io")
            .setDescription(`[Click Here](${invite.code}) to play Checkers!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${message.author.tag}`)
            const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Checkers")
    .setStyle("LINK")
    .setURL(`${invite.code}`))
            return message.channel.send({ embeds: [embed], components: [row] });
        });
    }
}