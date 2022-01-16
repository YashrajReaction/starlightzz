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
      .addField("<a:mo:932344516860600353> Moderation Commands:", "`kick`, `ban`, `softban`, `mute`, `unmute`, `tempmute`, `emojiid`, `userinfo`, `userid`, `serverinfo`, `announce`, `clear`, `createrole`, `delrole`, `newtext`, `newvoice`, `delchannel`, `enlargeemoji`, `say`, `giverole`, `removerole`, `lock`, `unlock`, `servericon`, `suggestion`")
      .addField("<a:mu:932347079634878555> Music Commands:", "`clearqueue`, `filter`, `filter list`, `info`, `jump`, `loop`, `lyrics`, `move`, `mute`, `pause`, `play`, `previoustrack`, `queue`, `remove`, `resume`, `unmute`, `volume`, `youtube`\n`➜Note: Music commands work only with slash commands!`")
      .addField("<a:in:932349713766826084> Info Commands:", "`avatar`, `animesearch`, `calculator`, `imdb`, `google`, `wiki`, `translate`, `weather`, `help`, `ping`, `botinfo`, `report`, `suggest`")
      .addField("<:ac:932333902754906183> Activities Commands:", "`awkword`, `betrayal`, `chess`, `doodlecrew`, `fishington`, `lettertile`, `poker`, `spellcast`, `youtube`\n`➜Note: Discord Activities commands only work on pc/computers!`")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
