const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "crime",
  description: "Work hard and earn some Cash!",
  run: async (client, message, args) => {
    
    let user = message.author;
    let author = await db.fetch(`crime_${message.guild.id}_${user.id}`)

    let timeout = 5400000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You have already crimed recently\nTry again in ${time.hours}h ${time.minutes}m `);
        message.channel.send({embeds: [timeEmbed]})
      } else {

        let replies = ['stole a store','stole a jewelry','stole a bank','killed a person','worked as a drug dealer','worked for mafia']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 600)
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setAuthor(`${user.username} Committed Crime`, `${user.displayAvatarURL()}`)
.setTimestamp()
        .setDescription(`${sucessemoji} You ${replies[result]} and earned ${amount} Cash`);
        message.channel.send({embeds: [embed1]})
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`crime_${message.guild.id}_${user.id}`, Date.now())
    };
  },
};
