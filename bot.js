const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === '510402549619228682') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`**يا هلا بالقمر الي جانا ونور سمانا .. بدون وجودك أنسى من هو أنا , :sparkles:**`,`**مثل مابقيـــنا , بوجودك إلتَّميــــنا , وتشرفـــنا بيكك ياقمــــــــرنا ,, :sparkles::kiss:**`,`http://discord.gg/sM4q2`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})
    
    client.login(process.env.BOT_TOKEN);
