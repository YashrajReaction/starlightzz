const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "instagram",
  aliases: ["insta", "ig"],
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
      .setImage("https://i.imgur.com/x5qID97.gif")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({embeds: [mainPage], components: [row]})
  },
};
