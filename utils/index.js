const cookie = require('./cookie')
const encrypt = require('./encrypt')
const corsOptions = require('./cors')
const jsonOptions = require('./json')
const { backUrl, frontUrl } = require('./url')
const imageDetails = require('./image')

module.exports = { cookie, encrypt, corsOptions, jsonOptions, backUrl, frontUrl, imageDetails }
