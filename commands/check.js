const { GoogleSpreadsheet } = require('google-spreadsheet');
const keys = ('../client_secret.json');
const { promisify } = require('util');
const Discord = require('discord.js');

module.exports = {
    name: "check",
    description: "Checks Value of Knife",

    async run (client, message, args) {

    let incorrectFormat = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Incorrect Format")
        .setDescription("Correct format: >check {knife}")
        .setTimestamp()

function printData(knife) {
    let lowerKnife = knife.KNIFE.toLowerCase(); 

    if(args.length === 1) {
        if(lowerKnife === args[0]) {

            let successEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(knife.KNIFE)
            .addFields(
                { name: 'Rarity:', value: knife.RARITY},
                { name: 'Value:', value: knife.VALUE},
                { name: 'Obtained:', value: knife.OBTAINED},
                { name: 'Origin:', value: knife.ORIGIN},
                { name: 'Special:', value: knife.SPECIAL}
            )
            .setFooter('Stats')
            .setTimestamp()
            
            message.channel.send(successEmbed)
        }
    }

    if(args.length === 2) {
        if(lowerKnife === `${args[0]} ${args[1]}`) {

            let successEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(knife.KNIFE)
            .addFields(
                { name: 'Rarity:', value: knife.RARITY},
                { name: 'Value:', value: knife.VALUE},
                { name: 'Obtained:', value: knife.OBTAINED},
                { name: 'Origin:', value: knife.ORIGIN},
                { name: 'Special:', value: knife.SPECIAL}
            )
            .setFooter('Stats')
            .setTimestamp()
            
            message.channel.send(successEmbed)
        }
    }

    if(args.length === 3) {
        if(lowerKnife === `${args[0]} ${args[1]} ${args[2]}`) {

            let successEmbed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle(knife.KNIFE)
            .addFields(
                { name: 'Rarity:', value: knife.RARITY},
                { name: 'Value:', value: knife.VALUE},
                { name: 'Obtained:', value: knife.OBTAINED},
                { name: 'Origin:', value: knife.ORIGIN},
                { name: 'Special:', value: knife.SPECIAL}
            )
            .setFooter('Stats')
            .setTimestamp()
            
            message.channel.send(successEmbed)
        }
    }
}


async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1OPp9zrnm2TD3Yfx5uSN_jORbSO7Z-tP3IxQ9rZ9Esqk');

    await doc.useServiceAccountAuth(require(keys));
    
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0];
    
    const sheetrows = await sheet.getRows({
        offset: 1
    });

    sheetrows.forEach(row => {
        printData(row);
    })

}

accessSpreadsheet()

    }
}
