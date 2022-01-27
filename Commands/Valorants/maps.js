const { MessageEmbed } = require('discord.js')
const { pagination } = require("reconlx")

module.exports = {
    name: "maps",
    aliases: ["map", "valorantmap"],
    description: "Get some information about Valorant",
    run: async(client, message, args) => {

      const embed1 = new MessageEmbed()
      .setTitle("Ascent - Valorant Map")
      .setColor("#06DBF7")
      .setDescription("An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.")
      .setImage("https://i.imgur.com/J2KPKkA.jpeg")
      
      
      const embed2 = new MessageEmbed()
      .setTitle("Bind - Valorant Map")
      .setColor("#06DBF7")
      .setDescription("Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank.")
      .setImage("https://i.imgur.com/SfXvAHK.jpeg")
      
      
      const embed3 = new MessageEmbed()
      .setTitle("Breeze - Valorant Map")
      .setColor("#06DBF7")
      .setDescription("Take in the sights of historic ruins or seaside caves on this tropical paradise. But bring some cover. You'll need them for the wide open spaces and long range engagements. Watch your flanks and this will be a Breeze.")
      .setImage("https://i.imgur.com/cmTsnkK.jpg")
      
      
      const embed4 = new MessageEmbed()
      .setTitle("Fracture - Valorant Map")
      .setColor("#06DBF7")
      .setDescription("A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.")
      .setImage("https://i.imgur.com/xWgKD5Q.jpeg")
      
      
      const embed5 = new MessageEmbed()
      .setTitle("Haven - Valorant Map")
      .setColor("#06DBF7")
      .setDescription("Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.")
      .setImage("https://i.imgur.com/lEB4ixQ.png")
      
      
      const embed6 = new MessageEmbed()
      .setTitle("Icebox - Valorant Map")
      .setColor("#06DBF7")
      .setDescription("Your next battleground is a secret Kingdom excavation site overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and they’ll never see you coming.")
      .setImage("https://i.imgur.com/1xdFbbp.jpeg")
      
      
      const embed7 = new MessageEmbed()
      .setTitle("Split - Valorant Map")
      .setColor("#06DBF7")
      .setDescription("If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.")
      .setImage("https://i.imgur.com/MviGSXa.jpeg")
      
      
      const embeds = [embed1, embed2,  embed3, embed4, embed5, embed6, embed7]   
      
      pagination({
        embeds: embeds,
        channel: message.channel,
        author: message.author,
        time: 30000,
        pageTravel: true,
        button: [
          {
           name: "number",
           style: "DANGER",
           emoji: "<:reply:933423898442235945>"
          }
        ]
      });
    }
}