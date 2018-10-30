const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`FALLEGA TEAM|*help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on("message", msg => {
    var prefix = "*";
if(msg.content.startsWith (prefix + "mylook")) {
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
 }
});

client.on('message', message => {
  if (message.content === "*server") {
      if (!message.channel.guild) return;
      const millis = new Date().getTime() - message.guild.createdAt.getTime();
      const now = new Date();


      const days = millis / 1000 / 60 / 60 / 24;
      let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
      var embed = new Discord.RichEmbed()
          .setAuthor(message.guild.name, message.guild.iconURL)
          .addField("**Server ID**", "**" + message.guild.id + "**", true)
          .addField("**Server Owner**", "**" + message.guild.owner + "**", true)
          .addField("**Server Location**", "**" + message.guild.region + "**", true)
          .addField('**Server Text Channels**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
          .addField("**Server Voice Channels**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
          .addField("**Date created**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
          .addField("**Roles**", `**[${message.guild.roles.size}]** Role `, true)

      .addField("Members", `
**${message.guild.memberCount}**`)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
      message.channel.sendEmbed(embed)

  }
});   
 
client.on('message', function(message) {
     if(!message.channel.guild) return;
  if (!message.member.hasPermissions(['ADMINISTRATOR'])){ 
      
          let command = message.content.split(" ")[0];
      if(message.content.includes('discord.gg')){
      if(!message.channel.guild) return;
      message.delete()
      message.reply(`**no links pls**`).then(msg => msg.delete(1000));
       
      }
  }
});     
 
client.on("message", message => {
    var prefix = "*";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                               
                              
                   } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                message.channel.send("***:white_check_mark: | Delete " + args[1] + " Message!***").then(m => m.delete(3000));
                                
                                                                                      

                            }
                          }
});

client.on("message", message => {
    if (message.content === prefix + "help") {
     const embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
   
   ** Bot ${client.user.username} Commands **
   ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

   -    [ ${prefix}ping ]  [ ping mta3 il bot ]
   
   -    [ ${prefix}clear ]  [ clear messages ]
   
   -    [ ${prefix}mylook ]  [ your look fi server ]
   
   -    [ ${prefix}avatar ]  [ besh tchuf taswirtek  ]
   
   -    [ ${prefix}server ]  [ info 3la server FALLEGA TEAM ]  **
   
   ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
   
   `)
   
   
   message.author.sendEmbed(embed)
   
   }
   });
    
   client.on('message', message => {
    if (message.content.startsWith("*avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }

});

client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('*ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()

.setFooter(message.author.username , message.author.avatarURL)
.setColor("RANDOM")

.setTimestamp()


.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});




client.login(process.env.BOT_TOKEN);