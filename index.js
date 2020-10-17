const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
    // put email and password below
    username: "email@website.com",
    password: "password",
    // you can also edit these if you'd like
    host: "minecraft.server.ip", // put a minecraft server ip here
    port: "25565", // 25565 is the default, only change it if you know what you're doing
    version: "1.8.9" // change the minecraft version
});

bot.once('login', () => {
    console.log('Bot has successfully logged in!');
});

bot.once('spawn', () => {
    console.log('Bot has successfully spawned!');
    bot.chat('Hello!');
});

bot.on('error', err => console.log(err));
