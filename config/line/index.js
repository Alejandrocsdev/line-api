require('dotenv').config()

const line = require('@line/bot-sdk')

const secret = process.env.CHANNEL_SECRET
const accessToken = process.env.CHANNEL_ACCESS_TOKEN

class Line {
  constructor() {
    this.newClient = new line.messagingApi.MessagingApiClient({
      channelAccessToken: accessToken
    })
    this.oldClient = new line.Client({
      channelSecret: secret,
      channelAccessToken: accessToken
    })
  }

  middleware() {
    return line.middleware({
      channelSecret: secret
    })
  }
}

module.exports = module.exports = {
  Line,
  line: new Line()
}
