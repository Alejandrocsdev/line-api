const { Router } = require('express')
const router = Router()

const richMenuRoutes = require('./richMenu')

router.use('/rich-menu', richMenuRoutes)

const { line } = require('../../../config/line')

const webhookHandler = require('../../../controllers/line/messaging')

const logger = (req, res, next) => {
  const body = req.body
  const destination = body.destination
  console.info('destination', destination)
  const events = body.events
  events.forEach((event, index) => console.info(`event[${index}]`, event))
  next()
}

router.post('/webhook', logger, line.middleware(), webhookHandler)

module.exports = router
