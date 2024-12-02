const line = require('@line/bot-sdk')

// 自訂 Line 錯誤模組
const lineError = err => {
  const { HTTPFetchError, HTTPError, RequestError, ReadError, JSONParseError } = line

  const isLineError =
    err instanceof HTTPFetchError ||
    err instanceof HTTPError ||
    err instanceof RequestError ||
    err instanceof ReadError ||
    err instanceof JSONParseError

  if (!isLineError) {
    return { isLineError }
  }

  const name = err.name || 'UnknownLineError'

  let message
  let code

  if (name === 'HTTPFetchError') {
    code = err.status || 500
    try {
      message = JSON.parse(err.body)
    } catch (parseErr) {
      console.error('解析 LINE API 錯誤回應失敗', parseErr)
      message = err.body || err.message
    }
  } else if (name === 'HTTPError') {
    code = err.statusCode || 500
    message = err.message
  } else {
    // RequestError
    // ReadError
    // JSONParseError
    // UnknownLineError
    code = 500
    message = err.message
  }

  return { name, message, code, isLineError }
}

module.exports = lineError
