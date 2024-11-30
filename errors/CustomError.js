// 自訂錯誤模組
class CustomError extends Error {
  constructor(code, message) {
    // 覆蓋 Error 預設錯誤訊息
    super(message)
    // 增加 Error.code (自訂錯誤狀態碼)
    this.code = code
  }
}

module.exports = CustomError
