const Discord = module.require("discord.js");
const snekfetch = require('snekfetch');

module.exports = {
  name: "meme",
  description: "Sends a random meme",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const { body } = await snekfetch
            .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        
        let titlee = allowed[randomnumber].data.title
        let urle = allowed[randomnumber].data.url
        
        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setDescription(`**[` + titlee + `]` + `(` + urle + `)**`)
        .setImage(allowed[randomnumber].data.url)
        .setFooter("👍 " + allowed[randomnumber].data.ups + "  |  💬 " + allowed[randomnumber].data.num_comments)
        message.channel.send({embeds: [embed]})
  },
};
