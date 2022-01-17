const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")

module.exports = {
  name: "leaderboard",
  aliases: ["lb"],
  description: "Users Leaderboard",
  run: async (client, message, args) => {
    
    const embed = new Discord.MessageEmbed()
    .setDescription(`**Input a Leaderboard Option**\n\nCash Leaderboard: s!leaderboard coins\nFresh Nikes Leaderboard: s!leaderboard nikes\nCar Leaderboard: s!leaderboard car\nMansion Leaderboard: s!leaderboard mansion`)
    .setColor("#FFFFFF")


  if(!args[0]) return message.channel.send({embeds: [embed]})

    if (args[0] == 'coins') {
    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = client.users.get(money[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${money[i].data}\n`
    
      }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Cash Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send({embeds: [embed]})
  } else if(args[0] == 'nikes') {
    let nike = db.startsWith(`nikes_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < nike.length; i++) {
        let user = client.users.get(nike[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${nike[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Fresh Nikes Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")
    
message.channel.send({embeds: [embed]})
  } else if(args[0] == 'car') {
    let cars = db.startsWith(`car_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < cars.length; i++) {
        let user = client.users.get(cars[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${cars[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Car Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send({embeds: [embed]})
  } else if(args[0] == 'mansion') {
    let mansions = db.startsWith(`house_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < mansions.length; i++) {
        let user = client.users.get(mansions[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${mansions[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Mansion Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send({embeds: [embed]})
  }
  },
};
