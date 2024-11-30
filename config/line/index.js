const line = require('@line/bot-sdk')

class Line {
  constructor() {
    this.config = {
      channelSecret: process.env.CHANNEL_SECRET
    }
    this.client = new line.messagingApi.MessagingApiClient({
      channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
    })
  }

  middleware() {
    return line.middleware(this.config)
  }

  handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null)
    }

    const echo = { type: 'text', text: event.message.text }

    return this.client.replyMessage({
      replyToken: event.replyToken,
      messages: [echo]
    })
  }
}

module.exports = new Line()
