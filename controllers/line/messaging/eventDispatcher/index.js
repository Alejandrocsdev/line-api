const eventController = require('../eventController')

const eventDispatcher = async event => {
  switch (event.type) {
    case 'message':
      return eventController.messageEvent(event)
    case 'unsend':
      return eventController.unsendEvent(event)
    case 'follow':
      return eventController.followEvent(event)
    case 'unfollow':
      return eventController.unfollowEvent(event)
    case 'join':
      return eventController.joinEvent(event)
    case 'leave':
      return eventController.leaveEvent(event)
    case 'memberJoined':
      return eventController.memberJoinedEvent(event)
    case 'memberLeft':
      return eventController.memberLeftEvent(event)
    case 'postback':
      return eventController.postbackEvent(event)
    case 'videoPlayComplete':
      return eventController.videoPlayCompleteEvent(event)
    case 'beacon':
      return eventController.beaconEvent(event)
    case 'accountLink':
      return eventController.accountLinkEvent(event)
    default:
      console.info(`${event.type} 事件無相應處理程序`)
      return Promise.resolve(null)
  }
}

module.exports = eventDispatcher
