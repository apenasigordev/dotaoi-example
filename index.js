const aoi = require('aoi.js');
const dotaoi = require('dotaoi');
require('dotenv').config()

const bot = new aoi.AoiClient({
  token: process.env.TOKEN,
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage"],
});

dotaoi.loadCommands(bot, true)