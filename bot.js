const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

https://discord.gg/UD7CYu	

}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 

https://discord.gg/UD7CYu


}).catch(console.error)
})
client.login('NDQ1OTU5NDAzMTMzNDY4Njc0.DxiaKA.JewNe3PhDr2a_zUZRr51-fgXF_E');
