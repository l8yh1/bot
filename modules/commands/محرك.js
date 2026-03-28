if (!global.engineIntervals) global.engineIntervals = new Map();

module.exports.config = {
  name: "محرك",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Replit Agent",
  description: "يرسل رسالة كل 30 ثانية (تفعيل/ايقاف)",
  commandCategory: "نظام",
  prefix: true,
  usages: "[تفعيل/ايقاف]",
  cooldowns: 5
};

console.log("DEBUG: Loaded 'محرك' command config.");

module.exports.run = async function ({ api, event, args }) {
  const { threadID, senderID } = event;
  const action = args[0]?.toLowerCase();

  // Admin Check
  const admins = (global.config.ADMINBOT || []).map(String);
  if (!admins.includes(String(senderID))) {
    return api.sendMessage("❌ هذا الأمر مخصص لأدمن البوت فقط.", threadID);
  }

  // Handle "ايقاف" or "stop" or "off"
  if (action === "ايقاف" || action === "off" || action === "stop") {
    if (global.engineIntervals.has(threadID)) {
      clearInterval(global.engineIntervals.get(threadID));
      global.engineIntervals.delete(threadID);
      return api.sendMessage("⏹️ تم إيقاف المحرك في هذه المجموعة.", threadID);
    } else {
      return api.sendMessage("⚠️ المحرك ليس قيد التشغيل في هذه المجموعة.", threadID);
    }
  }

  // Handle "تفعيل" or "on" or "start"
  if (action === "تفعيل" || action === "on" || action === "start") {
    if (global.engineIntervals.has(threadID)) {
      return api.sendMessage("⚠️ المحرك قيد التشغيل بالفعل.", threadID);
    }

    api.sendMessage("🚀 تم تفعيل المحرك بنجاح (رسالة كل 40 ثانية).", threadID);

    const interval = setInterval(() => {
      api.sendMessage(`𝗔𝘂𝘁𝗼 𝗥𝗲𝗽𝗹𝘆

᯽ 𝐁𝐋𝐎𝐎𝐃 𝐈𝐒 𝐇𝐄𝐑𝐄 ᯽


🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝ 🩸𝐊⃟⃝𝐒  〄 𝐌⃟⃝𝐊 🎴⚝


𖥚 ｢ ❛ 𝑺𝑨𝑪𝑹𝑬𝑫 𝑻𝑯𝑬𝑵𝑪𝑯𝑰𝑵𝑪𝑺 〄 𝑬𝑳 𝑴𝑶𝑪𝑹𝑶 𝑴𝑨𝑭𝑭𝑰𝑨 ❜ ｣ 𖥚



⌯ ⇣͟𝑳𝑶𝑹𝑫 𝕾̸̷̶ 𝑺𝑨𝑰 ‹.🂡.› ٭ 

⇣


  ْ￤⌯.❪ 🩸 ❫.⌯￤ 𖣘`, threadID);
    }, 40 * 1000);

    global.engineIntervals.set(threadID, interval);
  } else {
    return api.sendMessage("⚠️ الاستخدام: !محرك [تفعيل/ايقاف]", threadID);
  }
};
