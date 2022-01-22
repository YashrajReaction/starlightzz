const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")

module.exports = {
  name: "store",
  aliases: ["shop", "shops"],
  description: "Available store items",
  run: async (client, message, args) => {
    
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name}'s Shop Info:`, "https://i.imgur.com/WNmZBxk.png")
    .addField("<a:heart4:934118291314733117> ServerRoles Shop:", "1. `s!buy newbie` <@&934115776980459640> Price: 10000\n2. `s!buy pro` <@&934116157248655400> Price: 15000\n3. `s!buy master` <@&934116330758635551> Price: 20000\n4. `s!buy champion` <@&934116336383180810> Price: 35000\n5. `s!buy legend` <@&934116566264610836> Price: 50000")
    .addField("<a:VIP:934117755211354152> Vip Ranks:", "1. `s!buy bronze` Price: 2000\n2. `s!buy great` Price: 4000\n2. `s!buy expert` Price: 8000\n2. `s!buy veteran` Price: 16000\n2. `s!buy ultra` Price: 32000")
    .addField("<a:heartpotion:934118910976983060> Lifestyle Items:", "1. `s!buy nikes` Price: 600\n2. `s!buy car` Price: 800\n3. `s!buy mansion` Price: 1200")
    .setColor("#FFFFFF")
    message.channel.send({embeds: [embed]})

  },
};
