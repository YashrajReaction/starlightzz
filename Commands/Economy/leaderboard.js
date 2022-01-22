const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")

module.exports = {
  name: "leaderboard",
  aliases: ["lb"],
  description: "Users Leaderboard",
  run: async (client, message, args) => {
    
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Input Leaderboard Option:`, "https://i.imgur.com/WNmZBxk.png")
    .setDescription(`s!leaderboard bank\ns!leaderboard cash\ns!leaderboard nikes\ns!leaderboard car\ns!leaderboard mansion`)
    .setColor("#FFFFFF")
    .setFooter("s!lb bank | s!lb cash | s!lb nikes | s!lb car | s!lb mansion")


  if(!args[0]) return message.channel.send({embeds: [embed]})

    if (args[0] == 'cash') {
 const money = db.all().filter(i => i.ID.startsWith(`money_${message.guild.id}`)).sort((a,b) => b.data - a.data); // sorted balances
let content = "";
for (let i = 0; i < money.length; i++) {
  let user = client.users.cache.get(money[i].ID.split('_')[2]).username
  
  
  content += `${i+1}. ${user} - ${money[i].data}\n` // add the user's position and their name and balance
} 

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name}'s Cash Leaderboard:`, "https://i.imgur.com/WNmZBxk.png")
    .setDescription(`${content}`)
    .setFooter("s!lb bank | s!lb cash | s!lb nikes | s!lb car | s!lb mansion")
    .setColor("#FFFFFF")
    message.channel.send({embeds: [embed]})
      
      
      
      
  } else if(args[0] == 'nikes') {
    const nike = db.all().filter(i => i.ID.startsWith(`nikes_${message.guild.id}`)).sort((a,b) => b.data - a.data);
    let content = "";

    for (let i = 0; i < nike.length; i++) {
        let user = client.users.cache.get(nike[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${nike[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name}'s Nikes Leaderboard:`, "https://i.imgur.com/WNmZBxk.png")
    .setDescription(`${content}`)
    .setColor("#FFFFFF")
    .setFooter("s!lb bank | s!lb cash | s!lb nikes | s!lb car | s!lb mansion")
    
message.channel.send({embeds: [embed]})
    
    
    
  } else if(args[0] == 'car') {
    const cars = db.all().filter(i => i.ID.startsWith(`car_${message.guild.id}`)).sort((a,b) => b.data - a.data);
    let content = "";

    for (let i = 0; i < cars.length; i++) {
        let user = client.users.cache.get(cars[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${cars[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name}'s Cars Leaderboard:`, "https://i.imgur.com/WNmZBxk.png")
    .setDescription(`${content}`)
    .setColor("#FFFFFF")
    .setFooter("s!lb bank | s!lb cash | s!lb nikes | s!lb car | s!lb mansion")

    message.channel.send({embeds: [embed]})
    
    
    
    
  } else if(args[0] == 'mansion') {
    let mansions = db.all().filter(i => i.ID.startsWith(`house_${message.guild.id}`)).sort((a,b) => b.data - a.data);
    let content = "";

    for (let i = 0; i < mansions.length; i++) {
        let user = client.users.cache.get(mansions[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${mansions[i].data}\n`
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name}'s Mansion Leaderboard:`, "https://i.imgur.com/WNmZBxk.png")
    .setDescription(`${content}`)
    .setColor("#FFFFFF")
    .setFooter("s!lb bank | s!lb cash | s!lb nikes | s!lb car | s!lb mansion")

    message.channel.send({embeds: [embed]})
  }
  },
};
