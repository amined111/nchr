const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      يا هلا بالقمر الي جانا ونور سمانا .. بدون وجودك أنسى من هو أنا , :sparkles:

مثل مابقيـــنا , بوجودك إلتَّميــــنا , وتشرفـــنا بيكك ياقمــــــــرنا ,, :sparkles::kiss:

تنورنابا وجودك :**

                                 [ http://discord.gg/sM4q2  ] **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      يا هلا بالقمر الي جانا ونور سمانا .. بدون وجودك أنسى من هو أنا , :sparkles:

مثل مابقيـــنا , بوجودك إلتَّميــــنا , وتشرفـــنا بيكك ياقمــــــــرنا ,, :sparkles::kiss:

تنورنابا وجودك :
**
                                 [ http://discord.gg/sM4q2 ] **`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
