// 引用內件模組
const crypto = require('crypto')

// 引用自訂錯誤訊息模組
const CustomError = require('../errors/CustomError')

class Encrypt {
  // 密鑰
  secret() {
    try {
      return crypto.randomBytes(32).toString('hex')
    } catch (err) {
      console.error(err)
      throw new CustomError(500, '密鑰生成失敗 (Encrypt)')
    }
  }
}

module.exports = new Encrypt()
