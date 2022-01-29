const {
    MessageEmbed,
    Message,
    Client
} = require("discord.js");
const { readdirSync } = require("fs");
const create_mh = require(`../../utils/menu.js`);
const config = require(`../../config.json`)
const prefix = config.DEFAULT_PREFIX
      
module.exports = {
  name: "help",
  aliases: ["cmd", "commands", "helpmenu"],
  description: "Get the help commands of the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
  let color = client.embedColor;
      let categories = [];
        let cots = [];

        if (!args[0]) {

            //categories to ignore
            let ignored = [
                "Owner"
            ];

            const emo = {

        Config: "⚙️",
        Information: "ℹ️",
        Music: "🎵",
        Owner: "👑" 
            }

            let ccate = [];
           readdirSync("./Commands/").forEach((dir) => {
                if (ignored.includes(dir.toLowerCase())) return;
                const commands = readdirSync(`./Commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                if (ignored.includes(dir.toLowerCase())) return;

                const name = `${emo[dir]} - ${dir}`;
                
                let nome = dir.toUpperCase();

                let cats = new Object();

                //this is how it will be created as
                cats = {
                    name: name,
                    value: `\`${prefix}help ${dir.toLowerCase()}\``,
                    inline: true
                }


                categories.push(cats);
                ccate.push(nome);
            });
            //embed
            const embed = new MessageEmbed()
                 .setTitle("StarLightz ☄ Commands Menu:")
      .setColor("CYAN")
      .setImage("https://i.imgur.com/x5qID97.gif")
      .setDescription("You can send s!help [command name] to get info on a specific command!")
      .addField("<a:li:932354429527687188> Important Links:", "`annie`, `panda`, `facebook`, `instagram`")
      .addField("<a:Valorant:934441669535891506> Valorants Info:", "`agents`, `maps`")
      .addField("<a:se:932331677747937282> Settings Commands:", "`autorole`, `joinchannel`, `leavechannel`, `joinmessage`, `leavemessage`, `prefix`, `antilink`, `joinmessagevariables`")
      .addField("<a:fu:932335906583613531> Fun Commands:", "`8ball`, `ascii`, `cowsay`, `clyde`, `gif`, `emojify`, `fliptext`, `greentext`, `orangetext`, `hack`, `hug`, `joke`, `kill`, `kiss`, `slap`, `pokeimg`, `respect`, `reverse`, `roast`, `meme`, `nitro`, `vaportext`, `urban`")
      .addField("<a:ec:932741900623040522> Economy Commands:", "`work`, `crime`, `beg`, `rob`, `fish`, `hunt`, `pay`, `balance`, `profile`, `withdraw`, `deposit`, `daily`, `weekly`, `hourly`, `monthly`, `store`, `buy`, `sell`, `roulette`, `slots`, `storeinfo [item]`")
      .addField("<a:im:932339584640110633> Image Commands:", "`catsay`, `amazeme`, `changemymind`, `clyde`, `creatememe`, `memetemplates`, `trigger`, `trumptweet`, `wasted`, `wideavatar`")
      .addField("<a:mo:932344516860600353> Moderation Commands:", "`kick`, `ban`, `softban`, `mute`, `unmute`, `tempmute`, `emojiid`, `userinfo`, `userid`, `serverinfo`, `announce`, `clear`, `createrole`, `delrole`, `newtext`, `newvoice`, `delchannel`, `enlargeemoji`, `say`, `giverole`, `removerole`, `lock`, `unlock`, `servericon`, `suggestion`, `dm`, `nuke`")
      .addField("<a:mu:932347079634878555> Music Commands:", "`clearqueue`, `filter`, `filter list`, `info`, `jump`, `loop`, `lyrics`, `move`, `mute`, `pause`, `play`, `previoustrack`, `queue`, `remove`, `resume`, `unmute`, `volume`, `youtube`\n`➜Note: Music commands work only with slash commands!`")
      .addField("<a:in:932349713766826084> Info Commands:", "`avatar`, `animesearch`, `calculator`, `imdb`, `google`, `wiki`, `translate`, `weather`, `help`, `ping`, `botinfo`, `report`, `suggest`")
      .addField("<:ac:932333902754906183> Activities Commands:", "`awkword`, `betrayal`, `chess`, `checkers`, `wordsnack`, `puttparty`, `doodlecrew`, `fishington`, `lettertile`, `poker`, `spellcast`, `youtube`\n`➜Note: Discord Activities commands only work on pc/computers!`")

            .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
                
            let menus = create_mh(ccate);
            return message.channel.send({
                embeds: [embed],
                components: menus.smenu
            }).then((msgg) => {

                const menuID = menus.sid;

                const select = async (interaction) => {
                    if (interaction.customId != menuID) return;

                    let {
                        values
                    } = interaction;

                    let value = values[0];

                    let catts = [];

                    readdirSync("./Commands/").forEach((dir) => {
                        if (dir.toLowerCase() !== value.toLowerCase()) return;
                        const commands = readdirSync(`./Commands/${dir}/`).filter((file) =>
                            file.endsWith(".js")
                        );


                        const cmds = commands.map((command) => {
                            let file = require(`../../Commands/${dir}/${command}`); //getting the commands again

                            if (!file.name) return "No command name.";

                            let name = file.name.replace(".js", "");

                            if (client.commands.get(name).hidden) return;


                            let des = client.commands.get(name).description;
                            let emo = client.commands.get(name).emoji;
                            let emoe = emo ? `${emo} - ` : ``;

                            let obj = {
                                cname: `${emoe}\`${name}\``,
                                des
                            }

                            return obj;
                        });

                        let dota = new Object();

                        cmds.map(co => {
                            if (co == undefined) return;

                            dota = {
                                name: `${cmds.length === 0 ? "In progress." : co.cname}`,
                                value: co.des ? co.des : `No Description`,
                                inline: true,
                            }
                            catts.push(dota)
                        });

                        cots.push(dir.toLowerCase());
                    });

                    if (cots.includes(value.toLowerCase())) {
                        const combed = new MessageEmbed()
                            .setTitle(`__${value.charAt(0).toUpperCase() + value.slice(1)} Commands:-__`)
                            .setDescription(`Use \`${prefix}help\` followed by a command name to get more information on a command.\n\n`)
                            .addFields(catts)
                            .setColor("179D00")

                        await interaction.deferUpdate();

                        return interaction.message.edit({
                            embeds: [combed],
                            components: menus.smenu
                        })
                    };

                };

                const filter = (interaction) => {
                    return !interaction.user.bot && interaction.user.id == message.author.id
                };

                const collector = msgg.createMessageComponentCollector({
                    filter,
                    componentType: "SELECT_MENU"
                });
                collector.on("collect", select);
                collector.on("end", () => null);

            });

        } else {
            let catts = [];

            readdirSync("./Commands/").forEach((dir) => {
                if (dir.toLowerCase() !== args[0].toLowerCase()) return;
                const commands = readdirSync(`./Commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );


                const cmds = commands.map((command) => {
                    let file = require(`../../Commands/${dir}/${command}`);

                    if (!file.name) return "No command name.";

                    let name = file.name.replace(".js", "");

                    if (client.commands.get(name).hidden) return;


                    let des = client.commands.get(name).description;
                    let emo = client.commands.get(name).emoji;
                    let emoe = emo ? `${emo} - ` : ``;

                    let obj = {
                        cname: `${emoe}\`${name}\``,
                        des
                    }

                    return obj;
                });

                let dota = new Object();

                cmds.map(co => {
                    if (co == undefined) return;

                    dota = {
                        name: `${cmds.length === 0 ? "In progress." : prefix + co.cname}`,
                        value: co.des ? co.des : `No Description`,
                        inline: true,
                    }
                    catts.push(dota)
                });

                cots.push(dir.toLowerCase());
            });

            const command =
                client.commands.get(args[0].toLowerCase()) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                );

            if (cots.includes(args[0].toLowerCase())) {
                const combed = new MessageEmbed()
                    .setTitle(`__${args[0].charAt(0).toUpperCase() + args[0].slice(1)} Commands:-__`)
                    .setDescription(`Use \`${prefix}help\` followed by a command name to get more information on a command.\n\n`)
                    .addFields(catts)
                    .setColor("179D00")

                return message.channel.send({
                    embeds: [combed]
                })
            };

            if (!command) {
                const embed = new MessageEmbed()
                    .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
                    .setColor("RED");
                return await message.channel.send({
                    embeds: [embed],
                    allowedMentions: {
                        repliedUser: false
                    },
                });
            }

            const embed = new MessageEmbed() 
              .setTitle("Command Details:")
                .addField(
                    "Command:",
                    command.name ? `\`${command.name}\`` : "No name for this command."
                )
                .addField(
                    "Aliases:",
                    command.aliases ?
                    `\`${command.aliases.join("` `")}\`` :
                    "No aliases for this command."
                )
                .addField(
                    "Usage:",
                    command.usage ?
                    `\`${prefix}${command.name} ${command.usage}\`` :
                    `\`${prefix}${command.name}\``
                )
                .addField(
                    "Command Description:",
                    command.description ?
                    command.description :
                    "No description for this command."
                )
                .setFooter(
                    `Requested by ${message.author.tag}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
                .setTimestamp()
                .setColor("179D00");
            return await message.channel.send({
                embeds: [embed]
            });
        }
  },
};
