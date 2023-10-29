const fs = require('fs')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'Your Key',
}

global.namabot = "Bot OSKADA"
global.namaowner = "OSKADAPCT"
global.packname = namabot
global.author = namaowner
global.myweb = ""
global.footer_text = namabot
global.pp_bot = fs.readFileSync("./image/oskada.png")
global.qris = fs.readFileSync("./image/foto.jpg")
global.owner = ['62859181246529']
global.pairingNumber = "" //pairing number to install bot 
global.sessionName = 'session'
global.background = "https://telegra.ph/file/40342e0085d521cb8b907.jpg" //maks size 50kb agar welcome nya gk lemot
global.prefa = ['-_-']
global.grup_only = false //bot hanya bisa di gunakan dalam grup jika true
global.mess = {
    done: 'Done ✅',
    wait: '_⌛ Sedang di proses_',
    admin: '_Fitur Khusus Admin Group_',
    botNotAdmin: '_Jadikan Bot Sebagai Admin Terlebih Dahulu_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Khusus Dalam Group_',
}
global.butwel =  [{
   buttonId: '.menu',
   buttonText: {
      displayText: '⚡ Menu'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner 👤'
   },
   type: 1
}]
global.help = {
menu(pushname, salam, mundur, upload, download, totalGb, usedGb, freeGb, ownerName, botName, jam, tanggal, runtime, prefix){
  return `${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}

             *INFO-BOT*
             
❐ Time : ${jam}
❐ Date : ${tanggal}


              * COMMAND *
❐ ${prefix}info
❐ ${prefix}osis
❐ ${prefix}pendaftaran

,
}
}
