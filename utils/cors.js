const frontUrl = require('./url')

const allowedOrigins = [
  frontUrl
]

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('不允許的跨域請求'))
    }
  },
  credentials: true
}

module.exports = corsOptions