// 引用 image-size 模組
const sizeOf = require('image-size')
// 引用 fs 模組
const fs = require('fs')
// 引用自訂錯誤模組
const CustomError = require('../errors/CustomError')

const imageDetails = data => {
  let buffer = null

  try {
    if (!data) {
      throw new CustomError(400, '沒有收到圖片檔案(imageDetails)')
    }

    if (Buffer.isBuffer(data)) {
      buffer = data
    } else if (typeof data === 'string' || fs.existsSync(data)) {
      buffer = fs.readFileSync(data)
    } else {
      throw new CustomError(400, '圖片檔案格式錯誤(imageDetails)')
    }

    const details = sizeOf(buffer)
    const { width, height } = details
    const aspectRatio = (width / height).toFixed(2)
    const bytes = buffer.length

    details.size = {
      bytes,
      kb: (bytes / 1024).toFixed(2),
      mb: (bytes / (1024 * 1024)).toFixed(2)
    }

    details.aspectRatio = aspectRatio

    return details
  } catch (err) {
    console.error('圖片資訊處理失敗(imageDetails)', err)
    throw new CustomError(500, '圖片資訊處理失敗(imageDetails)')
  }
}

module.exports = imageDetails
