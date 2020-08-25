require('dotenv').config()
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
const names = fs.readFileSync('./names.txt', { encoding: 'utf8', flag: 'r' }).split('\n')

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content.toLowerCase() === '/quien') {
		const name = names[Math.floor(Math.random() * names.length)]
		msg.channel.send(`No se preocupen, fue ${name}`)
	}
});

if (process.env.NODE_ENV === 'development') {
	client.login(process.env.DEVELOPMENT_TOKEN);
} else {
	client.login(process.env.TOKEN);

}