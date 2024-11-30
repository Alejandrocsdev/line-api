const { Router } = require('express')
const router = Router()

const { lineController } = require('../controllers')

const line = require('../config/line')

router.post('/callback', (req, res, next) => {
  const body = req.body
  const events = body.events
  const message = events[0]?.message
  console.log('message', message)
  next()
}, line.middleware(), lineController.webhookHandler)

module.exports = router
