const { Line } = require('../../../../../config/line')

class MessageController extends Line {
  constructor() {
    super()
  }

  async textMessage(event) {
    const inputText = event.message.text

    const echoAction = () => {
      const echo = { type: 'text', text: inputText }
      return this.newClient.replyMessage({
        replyToken: event.replyToken,
        messages: [echo]
      })
    }

    const insultAction = () => {
      const text = '請不要說髒話，謝謝！'
      const message = { type: 'text', text }
      return this.newClient.replyMessage({
        replyToken: event.replyToken,
        messages: [message]
      })
    }

    const bannedWords = ['幹', '靠', '操']

    const containsBannedWord = bannedWords.some(word => inputText.includes(word))

    if (containsBannedWord) {
      return insultAction()
    }

    return echoAction()
  }

  async imageMessage(event) {
    console.log('imageMessage:', event)
    return Promise.resolve(null)
  }

  async videoMessage(event) {
    console.log('videoMessage:', event)
    return Promise.resolve(null)
  }

  async audioMessage(event) {
    console.log('audioMessage:', event)
    return Promise.resolve(null)
  }

  async fileMessage(event) {
    console.log('fileMessage:', event)
    return Promise.resolve(null)
  }

  async locationMessage(event) {
    console.log('locationMessage:', event)
    return Promise.resolve(null)
  }

  async stickerMessage(event) {
    console.log('stickerMessage:', event)
    return Promise.resolve(null)
  }
}

module.exports = new MessageController()
