const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')

const ranking = require('./util/ranking')
const chatPix = require('./util/chatPix')
const { getDonates, getWallet } = require('./util/livepix')

const app = express();

var corsOptions = {
  origin: 'https://widget-livestream.valandil.repl.co',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.static(__dirname + '/public'))
app.all('/', async (req, res) => {
  res.send('<h3>BOT OK</h3>')
})

app.post('/livepix', async (req, res) => {
  const donates = await getDonates(1)

  await chatPix({ data: donates.data[0]})

  res.status(200)
})

app.get('/meta', cors(corsOptions), async (req, res) => {
  const meta = await getWallet()

  res.json(meta)
})

app.all('/ranking', async (req, res) => {
  const donates = await getDonates(100)

  res.send(ranking({ itens: donates.data }))
})

app.use(bodyParser.json({ extended: true }))

function keepAlive() {
  app.listen(3001, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive