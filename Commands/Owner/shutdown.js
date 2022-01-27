const OWNER_ID = require("../../config.json").OWNER_ID;
module.exports = {
  name: "shutdown",
  owner: true,
  description: "Shut's down the bot",
  run: async (client, message, args) => {
    if (!OWNER_ID)
      return message.channel.send("This command is developer Only");

    message.channel.send("Shutting down...").then((m) => {
      client.destroy();
    });
    await message.channel.send("The Bot has been ShutDown");
  },
};
