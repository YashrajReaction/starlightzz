const Discord = module.require("discord.js");
const db = require("quick.db");
const { cashemoji, cashbank, total } = require("./../../emojis.json")

module.exports = {
  name: "profile",
  aliases: ["aboutpf"],
  description: "some description",
  run: async (client, message, args) => {
    
    let user = message.mentions.members.first() || message.author;

    
  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = '<:newbiegrey:934367506720763955>'
    if(vip === true) vip = '<:newbie:934360126838673439>'
  
  let gre = await db.fetch(`great_${message.guild.id}_${user.id}`)
    if(gre === null) gre = '<:newbiegrey:934367506720763955>'
    if(gre === true) gre = '<:great:934360275048603688>'
    
  let exp = await db.fetch(`expert_${message.guild.id}_${user.id}`)
    if(exp === null) exp = '<:newbiegrey:934367506720763955>'
    if(exp === true) exp = '<:expert:934360486231834744>'
    
  let vet = await db.fetch(`veteran_${message.guild.id}_${user.id}`)
    if(vet === null) vet = '<:newbiegrey:934367506720763955>'
    if(vet === true) vet = '<:veteran:934360665701892126>'
    
  let ult = await db.fetch(`ultra_${message.guild.id}_${user.id}`)
    if(ult === null) ult = '<:newbiegrey:934367506720763955>'
    if(ult === true) ult = '<:master:934363571884806164>'
    
    
    let newbierole = await db.fetch(`newbie_${message.guild.id}_${user.id}`)
if(newbierole === null) newbierole = '.'
if(newbierole === true) newbierole = '<@&934115776980459640>'
    
    let prorole = await db.fetch(`pro_${message.guild.id}_${user.id}`)
if(prorole === null) prorole = '.'
if(prorole === true) prorole = '<@&934116157248655400>'
    
    let masterrole = await db.fetch(`master_${message.guild.id}_${user.id}`)
if(masterrole === null) masterrole = '.'
if(masterrole === true) masterrole = '<@&934116330758635551>'
    
    let championrole = await db.fetch(`champion_${message.guild.id}_${user.id}`)
if(championrole === null) championrole = '.'
if(championrole === true) championrole = '<@&934116336383180810>'
    
    let legendrole = await db.fetch(`legend_${message.guild.id}_${user.id}`)
if(legendrole === null) legendrole = '.'
if(legendrole === true) legendrole = '<@&934116566264610836>'
    
    
    
    
    
    
    
    
  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'
/*
  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Profile**\n\nPocket: ${money}\nBank: ${bank}\nVIP Rank: ${vip}\n\n**Inventory**\n\nNikes: ${shoes}\nCars: ${newcar}\nMansions: ${newhouse}`);
  message.channel.send({embeds: [moneyEmbed]})
*/
let name = message.mentions.users.first() || message.author;
    let profileEmbed = new Discord.MessageEmbed()
    .setAuthor(`${name.username}'s Profile:`, `https://i.imgur.com/WNmZBxk.png`)
    .setColor("#0DF4EA")
    .addField(`Balance:`, `<a:cash:932743238031405167>Cash: ${money}               <:bank2:932743681490968636>Bank: ${bank}`)
    .addField(`Lifestyle Items:`, `Nikes = ${shoes}\nCars = ${newcar}\nMansions = ${newhouse}`)
    .addField(`VIP Badges:`, `${vip}    ${gre}    ${exp}    ${vet}    ${ult}`)
    .addField(`Casino Roles:`, `${newbierole} ${prorole} ${masterrole} ${championrole} ${legendrole}`)
    .setImage("https://media.discordapp.net/attachments/792691782399557634/934387003720597524/ezgif.com-gif-maker_2.gif")
    .setTimestamp()
    message.channel.send({embeds: [profileEmbed]})
  },
};
