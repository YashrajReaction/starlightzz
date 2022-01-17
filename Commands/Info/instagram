const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "instagram",
  description: "Get information about AnnieIzLive youtube channel",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("<a:instagram:932524386991349760> Starlightz")
    .setStyle("LINK")
    .setURL(`https://instagram.com/starlightz_officialzz?utm_medium=copy_link`))
    
    
    let mainPage = new MessageEmbed()
      .setTitle("Starlightz's Instagram:")
      .setColor("GREEN")
      .setDescription("<a:instagram:932524386991349760> Instagram ➜ [Starlightz Instagram](https://instagram.com/starlightz_officialzz?utm_medium=copy_link)")
      .setImage("https://media.discordapp.net/attachments/792691782399557634/932523397391466526/New_Project_18_3B2610E.gif")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({embeds: [mainPage], components: [row]})
  },
};
