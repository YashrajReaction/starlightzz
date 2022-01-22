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
          
    } else if(args[0] == 'great') {
        let Embed22 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 4000 Cash to purchase Great VIP`);
      if (author < 4000) return message.channel.send({embeds: [Embed22]})
        db.fetch(`great_${message.guild.id}_${user.id}`)
        db.add(`great_${message.guild.id}_${user.id}`, true)
        let Embed33 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased Great VIP for 4000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 4000)
        message.channel.send({embeds: [Embed33]})  
          
          
      } else if(args[0] == 'expert') {
        let Embed23 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 8000 Cash to purchase Expert VIP`);
      if (author < 8000) return message.channel.send({embeds: [Embed23]})
        db.fetch(`expert_${message.guild.id}_${user.id}`)
        db.add(`expert_${message.guild.id}_${user.id}`, true)
        let Embed34 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased Expert VIP For 8000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 8000)
        message.channel.send({embeds: [Embed34]})
      
    } else if(args[0] == 'veteran') {
        let Embed24 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 16000 Cash to purchase Veteran VIP`);
      if (author < 16000) return message.channel.send({embeds: [Embed24]})
        db.fetch(`veteran_${message.guild.id}_${user.id}`)
        db.add(`veteran_${message.guild.id}_${user.id}`, true)
        let Embed35 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased Veteran VIP For 16000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 16000)
        message.channel.send({embeds: [Embed35]})
      
      } else if(args[0] == 'ultra') {
        let Embed25 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 32000 Cash to purchase Ultra VIP`);
      if (author < 32000) return message.channel.send({embeds: [Embed25]})
        db.fetch(`ultra_${message.guild.id}_${user.id}`)
        db.add(`ultra_${message.guild.id}_${user.id}`, true)
        let Embed36 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased Ultra VIP For 32000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 32000)
        message.channel.send({embeds: [Embed36]})

//______________________Roles Buy___________________        
        
      } else if(args[0] == 'newbie') {
        let Embed222 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 10000 Cash to purchase <@&934115776980459640>`);
      if (author < 10000) return message.channel.send({embeds: [Embed222]})
        db.fetch(`newbie_${message.guild.id}_${user.id}`)
        db.add(`newbie_${message.guild.id}_${user.id}`, true)
        let Embed333 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased <@&934115776980459640> For 10000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 10000)
let role = message.guild.roles.cache.find(r => r.id === '934115776980459640')
let members = message.member
members.roles.add(role)
        message.channel.send({embeds: [Embed333]})
        
        } else if(args[0] == 'pro') {
        let Embed221 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 15000 Cash to purchase <@&934116157248655400>`);
      if (author < 15000) return message.channel.send({embeds: [Embed221]})
        db.fetch(`pro_${message.guild.id}_${user.id}`)
        db.add(`pro_${message.guild.id}_${user.id}`, true)
        let Embed331 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased <@&934116157248655400> For 15000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 15000)
          let role = message.guild.roles.cache.find(r => r.id === '934116157248655400')
let members = message.member
members.roles.add(role)
        message.channel.send({embeds: [Embed331]})
          
          } else if(args[0] == 'master') {
        let Embed223 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 20000 Cash to purchase <@&934116330758635551>`);
      if (author < 20000) return message.channel.send({embeds: [Embed223]})
        db.fetch(`master_${message.guild.id}_${user.id}`)
        db.add(`master_${message.guild.id}_${user.id}`, true)
        let Embed334 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased <@&934116330758635551> For 20000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 20000)
            let role = message.guild.roles.cache.find(r => r.id === '934116330758635551')
let members = message.member
members.roles.add(role)
        message.channel.send({embeds: [Embed334]})
            
            } else if(args[0] == 'champion') {
        let Embed2245 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 35000 Cash to purchase <@&934116336383180810>`);
      if (author < 35000) return message.channel.send({embeds: [Embed2245]})
        db.fetch(`champion_${message.guild.id}_${user.id}`)
        db.add(`champion_${message.guild.id}_${user.id}`, true)
        let Embed336 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased <@&934116336383180810> For 35000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 35000)
              let role = message.guild.roles.cache.find(r => r.id === '934116336383180810')
let members = message.member
members.roles.add(role)
        message.channel.send({embeds: [Embed336]})
              
              } else if(args[0] == 'legend') {
        let Embed2303 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You need 50000 Cash to purchase <@&934116566264610836>`);
      if (author < 50000) return message.channel.send({embeds: [Embed2303]})
        db.fetch(`legend_${message.guild.id}_${user.id}`)
        db.add(`legend_${message.guild.id}_${user.id}`, true)
        let Embed3033 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} Purchased <@&934116566264610836> For 50000 Cash`);
        db.subtract(`money_${message.guild.id}_${user.id}`, 50000)
                let role = message.guild.roles.cache.find(r => r.id === '934116566264610836')
let members = message.member
members.roles.add(role)
        message.channel.send({embeds: [Embed3033]})
                
                
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
