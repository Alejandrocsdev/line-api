const multer = require('multer')

const memoryUpload = multer({ storage: multer.memoryStorage() })

const upload = memoryUpload.single('image')

module.exports = upload
