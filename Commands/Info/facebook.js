const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "facebook",
  description: "Get information about AnnieIzLive youtube channel",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("<:facebook:932521183247761429> Starlightz")
    .setStyle("LINK")
    .setURL(`https://www.facebook.com/Starlightz-107905138244863/`))
    
    
    let mainPage = new MessageEmbed()
      .setTitle("Starlightz's Facebook Page:")
      .setColor("GREEN")
      .setDescription("<:facebook:932521183247761429> Facebook ➜ [Starlightz Facebook Page](https://www.facebook.com/Starlightz-107905138244863/)")
      .setImage("http://imgur.com/a/F8I7AOL")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({embeds: [mainPage], components: [row]})
  },
};
