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
      .addField("<a:se:932331677747937282> Settings Commands:", "`autorole`, `joinchannel`, `leavechannel`, `joinmessage`, `leavemessage`, `prefix`, `antilink`, `joinmessagevariables`")
      .addField("<a:fu:932335906583613531> Fun Commands:", "`8ball`, `ascii`, `cowsay`, `clyde`, `emojify`, `fliptext`, `greentext`, `orangetext`, `hack`, `hug`, `joke`, `kill`, `kiss`, `slap`, `pokeimg`, `respect`, `reverse`, `roast`, `meme`, `nitro`, `vaportext`, `urban`")
      .addField("<a:im:932339584640110633> Image Commands:", "`amazeme`, `changemymind`, `clyde`, `creatememe`, `memetemplates`, `trigger`, `trumptweet`, `wasted`, `wideavatar`")
      .addField("<a:mo:932344516860600353> Moderation Commands:", "")
      .addField("<:ac:932333902754906183> Activities Commands:", "`awkword`, `betrayal`, `chess`, `doodlecrew`, `fishington`, `lettertile`, `poker`, `spellcast`, `youtube`")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
