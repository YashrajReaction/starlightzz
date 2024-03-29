const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")

module.exports = {
  name: "sell",
  aliases: [""],
  description: "Sell some items to merchants!",
  run: async (client, message, args) => {
        
    let user = message.author;

    if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You don't have Nikes to sell`);
        let amount = Math.floor(Math.random() * 1500)
        let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send({embeds: [Embed2]})
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Sold Fresh Nikes For ${amount} Cash`);

        db.add(`money_${message.guild.id}_${user.id}`, amount)
        message.channel.send({embeds: [Embed3]})
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You don't have a Car to sell`);

       let cars = await db.fetch(`car_${message.guild.id}_${user.id}`)
       let amount = Math.floor(Math.random() * 2000)
        if (cars < 1) return message.channel.send({embeds: [Embed2]})
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Sold a Car For ${amount} Cash`);

        db.add(`money_${message.guild.id}_${user.id}`, amount)
        message.channel.send({embeds: [Embed3]})
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You don't have a Mansion to sell`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)
        let amount = Math.floor(Math.random() * 3000)
        if (houses < 1) return message.channel.send({embeds: [Embed2]})
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Sold a Mansion For ${amount} Cash`);

        db.add(`money_${message.guild.id}_${user.id}`, amount)
        message.channel.send({embeds: [Embed3]})
    }
  },
};
