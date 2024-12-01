const jsonOptions = {
  // verify: (req, res, buf) => {
  //   if (req.originalUrl.startsWith('/api/line')) {
  //     req.rawBody = buf.toString()
  //   }
  // }
  verify: (req, res, buf) => {
    if (req.originalUrl === '/api/line/messaging/webhook') {
      req.rawBody = buf.toString()
    }
  }
}

module.exports = jsonOptions
