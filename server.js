const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://ksm-https.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//client.on("message", message => {
  //if (message.author.bot) return;

  //if (message.content === prefix + "help") {
//message.channel.send("hdxfvbhsdvfh")
  //};
//}


 //كود للتجربة
client.on("message", message => { // تقديم اداره
  if(message.content=== prefix + "تقديم") {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "●تـقـديـم-الادارة")
            if(channel) {
            message.channel.send( message.member + '`1`').then( (m) =>{
              m.edit( message.member + ', اسمك' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + '`2`').then( (m) =>{
                      m.edit( message.member + ', عمرك' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + '`3`').then( (m) =>{
                            m.edit( message.member + ' كم لك بالديسكورد' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + '`4`').then( (m) =>{
                                  m.edit( message.member + ', ما هي خبرتك في الديسكورد ؟ !' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + '``5``').then( (m) =>{
                                        m.edit( message.member + ', مدة تفاعلك' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', Data is being sent').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL) 
                          .setColor('#c3cdff')
                        .setTitle(`\`Apply Administartion\` \n انتظر قليلا حتي يتم الرد عليك رجاء , \n > ID: ${message.author.id}`)
                        .addField('> \`اسمك:\`', ` ** ${name} ** ` , true)
                        .addField('> \`عمرك:\`', ` ** ${age} ** ` , true)
                        .addField('> \`كم لك بالديسكورد:\`',`** ${ask} ** ` , true)
                        .addField('> \`ما هي خبرتك في الديسكورد ؟:\` ',` ** ${ask2} ** ` , true)
                        .addField('> \`مدة تفاعلك?\`',` ** ${ask3} ** ` , true)
                        .addField('> __Your Account Created: __',` \`${message.author.createdAt} \` ` , true)
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

})
})
})
})
})
})
})
})
})
})
})
}
}
        });





        client.on('message',async message => {
          let mention = message.mentions.members.first();
          if(message.content=== prefix +"قبول") {
          if(!message.channel.guild) return;
          let acRoom = message.guild.channels.find
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
          if(!mention) return message.reply("Please Mention");
         
          acRoom.send(`> اهلا بك تم قبولك ك اداري في السيرفر \n ${mention}:partying_face: `)
          }
        });

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content=== prefix +"رفض") {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
  if(!mention) return message.reply("Please Mention");
 
  acRoom.send(`> :thumbsup:لقد تم رفضك للاسف حاول فى وقت لاحق:thumbsup: \n ${mention} - :pleading_face: `)
  }
});


///تعديل اساسي
/// كود الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "السلام عليكم") {
    message.channel.send("**:heart:وعليكم السلام ورحمة الله وبركاته:heart:**");
    message.channel.sendFile("");
  }
});


///تعديل اساسي
/// كود الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "برب") {
    message.channel.send("تيت");
    message.channel.sendFile("");
  }
});
///تعديل اساسي
/// كود الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "-") {
    message.channel.send("**welcome we are happy with you here**");
    message.channel.sendFile("");
  }
});

///تعديل اساسي
/// كود الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === "ممكن نتعرف؟") {
    message.channel.send("لا اسف");
    message.channel.sendFile("");
  }
});
///تعديل اساسي
/// كود الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === prefix +"help") {
    message.channel.send("**:sparkles:للتقديم=اكتب $تقديم وجاوب على الاسئلة:sparkles:**");
    message.channel.sendFile("");
  }
});
///تعديل اساسي
/// كود الرد التلقائي
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.content === prefix +"info") {
    message.channel.send("**اذا حصلت لك اي مشكلة تواصل مع Sovyet Himalaya#0001/Mustafa Mohamed#3533**");
    message.channel.sendFile("");
  }
});
     




  



















