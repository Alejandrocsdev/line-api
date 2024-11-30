// 引用異步錯誤中間件
const { asyncError } = require('../middlewares')
// 自訂錯誤模組
const CustomError = require('../errors/CustomError')
// 引用自訂 line 模組
const line = require('../config/line')

class LineController {
  webhookHandler = asyncError(async (req, res) => {
    Promise.all(req.body.events.map(event => line.handleEvent(event)))
      .then(result => res.json(result))
      .catch(err => {
        console.error(err)
        res.status(500).end()
      })
  })
}

module.exports = new LineController()
