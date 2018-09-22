/***************************/
/* SCUMBOT DISCORD RELEASE */
/* 19/09                   */
/***************************/

const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!") /*prefix for command*/

bot.on('ready', function() {
    bot.user.setGame("discord.gg/gHPB4G7"); /*"Playing discord.gg/gHPB4G7"*/
    console.log("Connected to Discord Server"); /*if the bot is connected : indicate in the console logs*/
});

bot.login(process.env.TOKEN); /*token scumbot*/

bot.on('message', message => {
    if (message.content === prefix + "help"){ /*test command*/
        message.channel.sendMessage("Liste des commandes : /n -*help");
    }

    if (message.content === prefix + "bmscum"){
        message.reply("https://bit.ly/2Mr58cI"); /*!bmscum : first battle metrics scum command test*/
        console.log("Command BattleMetrics done");
    }

    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
            .setTitle("EMBED")
            .setDescription("Ceci est un embed")
            .addField(".help", "Page d'aide", true) /*!embed : test embled type*/
            .addField("Embed01", "Embed 01 ! :) Suivez les tutos de [YouTube](https://www.youtube.com/)", true)
            .setColor("0xFF8000")
            .setFooter("Bon moment parmis nous ! :)")
        message.channel.sendEmbed(embed);
    }

    if (message.content === prefix + "bms"){
        var embed = new Discord.RichEmbed()
            .setTitle("BattleMetrics SCUM") /*!bms : second battle metrics scum command test*/
            .setDescription("Données BattleMetrics du serveur [FR] Le Survivant - NO LAG (SCUM)")
            .addField("Données BattleMetrics du serveur [FR] Le Survivant - NO LAG (SCUM)", "coucou", true)
            .setColor("#2ecc71")
            .setFooter("(Ci-dessous)")
        message.channel.sendEmbed(embed);
        message.channel.sendMessage("!.")
    }
    
    if (message.content === prefix + "."){ /*is part of the !bms command*/
        message.channel.sendMessage("https://cdn.battlemetrics.com/b/horizontal500x80px/2619273.html?foreground=%23EEEEEE&background=%23222222&lines=%23333333&linkColor=%231185ec&chartColor=%23FF0700");
    }
    
    if (message.content.includes('!.')) {
        message.delete() /*is part of the !bms command*/
    }


    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Discord")
        .addField("Nom du Discord", message.guild.name)
        .addField("Créé le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)
    }
});
