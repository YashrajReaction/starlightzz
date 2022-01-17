const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "joinmessagevariables",
  description: "Get information about joinmessage",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    
    let mainPage = new MessageEmbed()
      .setTitle("__Join Message Variables:__")
      .setColor("GREEN")
      .setDescription("**User Mention:**  ➜ {user.mention}\n**User Name:**  ➜ {user.name}\n**Server Name:**  ➜ {server}\n**Membercount:**  ➜ {membercount}")
      //.setImage("")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({embeds: [mainPage]})
  },
};
