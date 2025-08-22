const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: "zurnacraft.net",
    port: 25565,
    username: "cengizpoyraztunc",
    version: "1.19"
  });

  bot.on('login', () => {
    console.log("Bot sunucuya bağlandı ✅ Komutlar gönderiliyor...");

    // 1️⃣ /login
    setTimeout(() => {
      bot.chat("/login benbitben");
      console.log("/login komutu gönderildi ✅");
    }, 7000); // 7 saniye

    // 2️⃣ /warp afk
    setTimeout(() => {
      bot.chat("/warp afk");
      console.log("/warp afk komutu gönderildi ✅");
    }, 15000); // 15 saniye

    // 3️⃣ /shard balance
    setTimeout(() => {
      bot.chat("/shard balance");
      console.log("/shard balance komutu gönderildi ✅");
    }, 25000); // 25 saniye

    // 4️⃣ Her 3 dakikada /shard pay obbyzz 1
    setTimeout(() => {
      setInterval(() => {
        bot.chat("/shard pay obbyzz 1");
        console.log("/shard pay obbyzz 1 komutu gönderildi ✅");
      }, 180000); // 180000ms = 3 dakika
    }, 30000); // önce balance komutu gönderilsin
  });

  bot.on('chat', (username, message) => {
    console.log(`[CHAT] <${username}> ${message}`);
  });

  bot.on('whisper', (username, message) => {
    console.log(`[WHISPER] <${username}> ${message}`);
  });

  bot.on('end', () => {
    console.log("Bağlantı koptu, 10 sn sonra tekrar bağlanacak...");
    setTimeout(createBot, 10000);
  });

  bot.on('kicked', reason => {
    console.log("Sunucudan atıldım:", reason);
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => {
    console.log("Hata:", err.message);
  });
}

createBot();
