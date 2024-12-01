const { Router } = require('express')
const router = Router()

const messagingRoutes = require('./messaging')
// const loginRoutes = require('./login')
// const linePayRoutes = require('./linePay')
// const blockchainRoutes = require('./blockchain')

router.use('/messaging', messagingRoutes)
// router.use('/login', loginRoutes)
// router.use('/line-pay', linePayRoutes)
// router.use('/blockchain', blockchainRoutes)

module.exports = router
