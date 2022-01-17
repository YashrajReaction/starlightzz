const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "instagram",
  description: "Get information about AnnieIzLive youtube channel",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("🔗 Starlightz")
    .setStyle("LINK")
    .setURL(`https://instagram.com/starlightz_officialzz?utm_medium=copy_link`))
    
    
    let mainPage = new MessageEmbed()
      .setTitle("Starlightz's Instagram:")
      .setColor("GREEN")
      .setDescription("<a:instagram:932524386991349760> Instagram ➜ [Starlightz Instagram](https://instagram.com/starlightz_officialzz?utm_medium=copy_link)")
      .setImage("https://i.imgur.com/RX8b8MX.gif")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({embeds: [mainPage], components: [row]})
  },
};
