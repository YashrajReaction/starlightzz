const Discord = module.require("discord.js");
const db = require("quick.db");
const { cashemoji, sucessemoji, crossemoji } = require("./../../emojis.json")

module.exports = {
  name: "buy",
  aliases: ["buyying"],
  description: "some description",
  run: async (client, message, args) => {
    let user = message.author;
    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${crossemoji} You need 2000 Cash to purchase Bronze VIP`);
    
        if (args[0] == 'bronze') {
        if (author < 3500) return message.channel.send({embeds: [Embed]})
        db.fetch(`bronze_${message.guild.id}_${user.id}`);
        db.set(`bronze_${message.guild.id}_${user.id}`, true)
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased Bronze VIP For 2000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 2000)
        message.channel.send({embeds: [Embed2]})
          
          
    } else if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 600 Cash to purchase some Nikes`);
      if (author < 600) return message.channel.send({embeds: [Embed2]})
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)
        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased Fresh Nikes For 600 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
        message.channel.send({embeds: [Embed3]})
      
      
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 800 coins to purchase a new car`);

        if (author < 800) return message.channel.send({embeds: [Embed2]})
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased a New Car For 800 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send({embeds: [Embed3]})
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 1200 coins to purchase a Mansion`);

        if (author < 1200) return message.channel.send({embeds: [Embed2]})
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased a Mansion For 1200 Coins`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send({embeds: [Embed3]})
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} Enter an item to buy`)
        message.channel.send({embeds: [embed3]})
    }
  },
};