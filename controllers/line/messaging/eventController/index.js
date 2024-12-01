const { Line } = require('../../../../config/line')

const messageController = require('./messageController')

class EventController extends Line {
  constructor() {
    super()
  }

  async messageEvent(event) {
    switch (event.message.type) {
      case 'text':
        return messageController.textMessage(event)
      case 'image':
        return messageController.imageMessage(event)
      case 'video':
        return messageController.videoMessage(event)
      case 'audio':
        return messageController.audioMessage(event)
      case 'file':
        return messageController.fileMessage(event)
      case 'location':
        return messageController.locationMessage(event)
      case 'sticker':
        return messageController.stickerMessage(event)
      default:
        console.info(`${event.message.type} 訊息無相應處理程序`)
        return Promise.resolve(null)
    }
  }

  async unsendEvent(event) {
    console.log('unsendEvent:', event)
    return Promise.resolve(null)
  }

  async followEvent(event) {
    console.log('followEvent:', event)
    return Promise.resolve(null)
  }

  async unfollowEvent(event) {
    console.log('unfollowEvent:', event)
    return Promise.resolve(null)
  }

  async joinEvent(event) {
    console.log('joinEvent:', event)
    return Promise.resolve(null)
  }

  async leaveEvent(event) {
    console.log('leaveEvent:', event)
    return Promise.resolve(null)
  }

  async memberJoinedEvent(event) {
    console.log('memberJoinedEvent:', event)
    return Promise.resolve(null)
  }

  async memberLeftEvent(event) {
    console.log('memberLeftEvent:', event)
    return Promise.resolve(null)
  }

  async postbackEvent(event) {
    console.log('postbackEvent:', event)
    return Promise.resolve(null)
  }

  async videoPlayCompleteEvent(event) {
    console.log('videoPlayCompleteEvent:', event)
    return Promise.resolve(null)
  }

  async beaconEvent(event) {
    console.log('beaconEvent:', event)
    return Promise.resolve(null)
  }

  async accountLinkEvent(event) {
    console.log('accountLinkEvent:', event)
    return Promise.resolve(null)
  }
}

module.exports = new EventController()
