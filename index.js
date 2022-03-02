const fs = require("fs");
//const chalk = require("chalk");

const { Client, Collection, Intents, MessageEmbed } = require("discord.js");
const { DEFAULT_PREFIX, BOT_TOKEN, ERROR_LOGS_CHANNEL, ALEXFLIPNOTE_API_KEY, YT_COOKIE } = require("./config.json");
const { loadCommands } = require("./handler/loadCommands");
const { loadEvents } = require("./handler/loadEvents");
const { loadSlashCommands } = require("./handler/loadSlashCommands")
const { loadPlayerEvents } = require("./handler/loadPlayerEvents");
const { DiscordTogether } = require('discord-together')
const { Player } = require('discord-player')
const Enmap = require("enmap")
const db = require("quick.db")

const client = new Client({
  allowedMentions: { parse: ["users", "roles", "everyone"] },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});
const { checkValid } = require("./functions/validation/checkValid")
const Embeds = require("./functions/embeds/Embeds")
const Logger = require("./functions/Logger/Logger")
const Util = require("./functions/util/Util")

const alexClient = require("alexflipnote.js")
client.images = new alexClient(ALEXFLIPNOTE_API_KEY)
client.discordTogether = new DiscordTogether(client);
client.commands = new Collection();
client.slash = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands/");
client.setMaxListeners(0);
const Cookie = YT_COOKIE;
client.logger = Logger;
client.utils = Util;
client.say = Embeds;
const player = new Player(client, {
  leaveOnEnd: true,
  leaveOnStop: true,
  leaveOnEmpty: false,
  leaveOnEmptyCooldown: 60000,
  autoSelfDeaf: true,
  initialVolume: 130,
  ytdlDownloadOptions: {
    requestOptions: {
      headers: {
        cookie: Cookie,
      }
    }
  },
})

player.use("YOUTUBE_DL", require("@discord-player/downloader").Downloader);
client.player = player;
client.db = new Enmap({ name: "musicdb" });

loadCommands(client);
loadEvents(client);
loadPlayerEvents(client);
loadSlashCommands(client);
checkValid();

// Error Handling

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);

  const exceptionembed = new MessageEmbed()
  .setTitle("Uncaught Exception")
  .setDescription(`${err}`)
  .setColor("RED")
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [exceptionembed] })
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(
    "[FATAL] Possibly Unhandled Rejection at: Promise ",
    promise,
    " reason: ",
    reason.message
  );

   const rejectionembed = new MessageEmbed()
  .setTitle("Unhandled Promise Rejection")
  .addField("Promise", `${promise}`)
  .addField("Reason", `${reason.message}`)
  .setColor("RED")
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [rejectionembed] })
});


/*
let voiceStates = {};

client.on('voiceStateUpdate', (oldState, newState) => {
  let { id } = oldState;
  let user = newState.member.user.id
  let guild = newState.guild.id
  if (!oldState.channel) {
   // console.log('user joined voice channel');

    voiceStates[id] = { joined: new Date() };
    // If the user is not muted...
    if (!newState.selfMute) {
      // ...execute a callback a minute later (this may be cancelled: see below)
      voiceStates[id].timeout = setTimeout(() => {
        // charge the coins
        // do whatever after the user has been on the channel unmuted for a minute
      }, 60000);
    }
  } else if (!newState.channel || newState.selfMute) {
    // If the user left the channel or muted themselves and there is a timeout...
    if (voiceStates[id].timeout) {
      // ...cancel the timeout
      clearTimeout(voiceStates[id].timeout);
      voiceStates[id].timeout = undefined;
    }

    if (!newState.channel) {
      // rest of your code for if the user left the channel...
      //console.log('user left voice channel');

      let now = new Date();

      // Only difference from your code is here
      let joined = voiceStates[id] && voiceStates[id].joined || new Date();
*/

const XPIntervals = {};

client.on("voiceStateUpdate", (oldState, newState) => {
  const userId = newState.member.id;
  const guildId = newState.guild.id;
  
  if (!oldState.channel) {
    // intervals don't exist yet
    if (typeof XPIntervals[userId] === "undefined") {
      XPIntervals[userId] = setInterval(() => {
      db.add(`money_${guildId}_${userId}`, 100)
      }, 120000);
    }
  } else {
    // user left, clear the interval
    clearInterval(XPIntervals[userId]);

    // remove the interval object, so it can be created again later
    delete XPIntervals[userId];
  }
});











client.login(process.env.BOT_TOKEN).then(() => {
  console.log(` Successfully logged in as: ${client.user.username}#${client.user.discriminator} `);
});
