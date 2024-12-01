// 引用異步錯誤中間件
const { asyncError } = require('../../../middlewares')
// 引用 事件分發器模組
const eventDispatcher = require('./eventDispatcher')

const webhookHandler = asyncError(async (req, res) => {
  console.log('req.body.events', req.body.events)
  const results = await Promise.all(req.body.events.map(eventDispatcher))
  results.forEach((result, index) => console.info(`result[${index}]`, result))
  res.status(200).json('OK')
})

module.exports = webhookHandler
