const { Router } = require('express')
const router = Router()

const lineRoutes = require('./line')

router.use('/line', lineRoutes)

module.exports = router
