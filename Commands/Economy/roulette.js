const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")
const ms = require("parse-ms");
const { green, red, black } = require("./../../emojis.json")

module.exports = {
  name: "roulette",
  aliases: ["gamble"],
  description: "Gamble some cash",
  run: async (client, message, args) => {
    
    let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`${crossemoji} Specify an amount to gamble | s!roulette <color> <amount>`);

let moneymore = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`${crossemoji} You are betting more than you have`);

let colorbad = new Discord.MessageEmbed()
.setColor("#FFFFFF")
.setDescription(`${crossemoji} Specify a color | Red [1.5x] Black [2x] Green [15x]`);


    if (!colour)  return message.channel.send({embeds: [colorbad]});
    colour = colour.toLowerCase()
    if (!money) return message.channel.send({embeds: [moneyhelp]}); 
    if (money > moneydb) return message.channel.send({embeds: [moneymore]});
    
    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send({embeds: [colorbad]});
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${green} You won ${money} Cash\n\nMultiplier: 15x`);
        message.channel.send({embeds: [moneyEmbed1]})
        console.log(`${message.author.tag} Won ${money} on green`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${red} You won ${money} Cash\n\nMultiplier: 1.5x`);
        message.channel.send({embeds: [moneyEmbed2]})
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${black} You won ${money} Cash\n\nMultiplier: 2x`);
        message.channel.send({embeds: [moneyEmbed3]})
    } else { // Wrong
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You lost ${money} Cash\n\nMultiplier: 0x`);
        message.channel.send({embeds: [moneyEmbed4]})
    }
  },
};
