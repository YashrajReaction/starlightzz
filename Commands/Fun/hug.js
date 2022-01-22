const Discord = module.require("discord.js");
const superagent = require('superagent');

module.exports = {
  name: "hug",
  description: "just hug someone",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    
    const { body } = await superagent
    .get("https://nekos.life/api/hug");
    
    var member = message.mentions.members.first();
    if (!member) return message.channel.send("You need to mention someone");
    let HugEmbed = new Discord.MessageEmbed()
      .setDescription(`${message.author.toString()} **you can't hug yourself but come here I'll hug you** <a:cuteghost:933465243282194484>`)
      .setImage(body.url)
      .setColor(0xf000ff);
    if (member.id === message.author.id) return message.channel.send({embeds: [HugEmbed]});
    let HugEmbed2 = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username} hugs <@${member.user.username}>, how cute!** <a:cuteghost:933465243282194484>`)
      .setImage(body.url)
      .setColor(0xf000ff);
    return message.channel.send({ embeds: [HugEmbed2] });
  },
};
