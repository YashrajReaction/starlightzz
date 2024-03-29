const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, timeemoji } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "rob",
  aliases: ["robbing"],
  description: "Rob someone 👾",
  run: async (client, message, args) => {
    
    let user = message.mentions.members.first()
let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`)
let author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
let author2 = await db.fetch(`money_${message.guild.id}_${user.id}`)

let timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${timeemoji} You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send({embeds: [timeEmbed]})
  } else {

let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} You need atleast 200 coins in your wallet to rob someone`);

if (author2 < 200) {
    return message.channel.send({embeds: [moneyEmbed]})

}
let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} ${user.user.username} does not have anything you can rob`);
if (targetuser < 0) {
    return message.channel.send({embeds: [moneyEmbed2]})
}



let random = Math.floor(Math.random() * 100) + 1;

let embed = new Discord.MessageEmbed()
.setDescription(`${sucessemoji} You robbed ${user} and got away with ${random} Cash!`)
.setColor("#FFFFFF")
message.channel.send({embeds: [embed]})

db.subtract(`money_${message.guild.id}_${user.id}`, random)
db.add(`money_${message.guild.id}_${user.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  }
  
  },
};
