const tmi = require('tmi.js');
const BOTNAME = 'wig1bot'
const CHANNELS = ['Valandiil']
const TOKEN = process.env.TOKEN

const opts = {
  identity: {
    username: BOTNAME,
    password: TOKEN,
  },
  channels: CHANNELS,
}

const client = new tmi.client(opts);

client.connect();

const chatPix = async ({ data }) => {
  const { tipper, amount } = data
  const value = amount / 100
  const message = `${tipper}, obrigado pelos ${value} ${value >= 2 ? 'reais' : 'real'} wig1Hype`

  await client.say('#valandiil', message)
}

module.exports = chatPix
