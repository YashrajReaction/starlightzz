const Discord = require("discord.js");

module.exports = {
  name: "help2",
  description: "Get the help commands of the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription("hi")
      .addField("<a:se:932331677747937282> Settings:", "`autorole`, `joinchannel`, `leavechannel`, `joinmessage`, `leavemessage`, `prefix`, `antilink`, `joinmessagevariables`")
      .addField("", "")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
