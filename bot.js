const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
شرفنا يا عسل:wink: :kissing_heart:
سرفر جديد يحتاج دعمكم في تقديم على ادارة
https://discord.gg/UD7CYu	
	
joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 

‏نقدم لك دعوة لسموك الراقيَ .
‏لنحظى بجمال حضورك وتواجدك
شرفنا يا عسل:wink: :kissing_heart:
سرفر جديد يحتاج دعمكم في تقديم على ادارة
https://discord.gg/UD7CYu

joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NDQ1OTU5NDAzMTMzNDY4Njc0.DxiaKA.JewNe3PhDr2a_zUZRr51-fgXF_E');
