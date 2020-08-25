// TODO: custom command prefix
// TODO: display avaliable commands
// TODO: custom names (/quien)
// TODO: this is awful. There has to be a way to parse commands

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
	} else if (msg.content.match(/\/(can|should)(i|we)punchnazis/gis)) {
		msg.channel.send('**YES!**\nIt is **always** ok to punch a nazi.',
			{files: [{attachment: './media/punch.gif', name: 'punch.gif'}]}).catch(err => console.error(err))
	}
});

if (process.env.NODE_ENV === 'development') {
	client.login(process.env.DEVELOPMENT_TOKEN);
} else {
	client.login(process.env.TOKEN);
}