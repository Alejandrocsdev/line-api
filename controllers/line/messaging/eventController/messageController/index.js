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

    const richMenuAction = matchedWord => {
      const images = {
        '線上訂位/查看菜單':
          'https://res.cloudinary.com/dprwe2o80/image/upload/v1733123143/%E6%9F%A5%E7%9C%8B%E8%8F%9C%E5%96%AE_iyz79q.jpg',
        開啟會員卡:
          'https://res.cloudinary.com/dprwe2o80/image/upload/v1733123201/%E6%9C%83%E5%93%A1%E4%B8%AD%E5%BF%83_jpqupb.jpg',
        常見問題: 'https://res.cloudinary.com/dprwe2o80/image/upload/v1733123142/%E6%9C%83%E5%93%A1%E5%8D%A1_qmugqp.jpg'
      }
      const imageUrl = images[matchedWord]
      if (!imageUrl) {
        return Promise.resolve(null)
      }

      const imageMessage = {
        type: 'image',
        originalContentUrl: imageUrl,
        previewImageUrl: imageUrl
      }

      return this.newClient.replyMessage({
        replyToken: event.replyToken,
        messages: [imageMessage]
      })
    }

    const bannedWords = ['白癡', '傻瓜', '笨蛋']
    const containsBannedWord = bannedWords.some(word => inputText.includes(word))
    const richMenuWords = ['線上訂位/查看菜單', '開啟會員卡', '常見問題']
    const matchedRichMenuWord = richMenuWords.some(word => inputText.includes(word))

    if (containsBannedWord) {
      return insultAction()
    }
    if (matchedRichMenuWord) {
      return richMenuAction(inputText)
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
