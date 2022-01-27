const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "youtube",
    description: "Watch Youtube in Discord!",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('You need to join a voice channel first!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'youtube').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Youtube Together")
            .setDescription(`[Click Here](${invite.code}) to access Youtube Together!\n\`\`\`\nNote: This feature is not availble for mobile users!\`\`\``)
            .setColor("RED")
            .setFooter(`Requested By: ${message.author.tag}`)
            const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("YoutubeTogether")
    .setStyle("LINK")
    .setURL(`${invite.code}`))
            return message.channel.send({ embeds: [embed], components: [row] });
        });
    }
}