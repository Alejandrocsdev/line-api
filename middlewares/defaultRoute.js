// 引用自訂錯誤模組
const CustomError = require('../errors/CustomError')

// 未知路由中間件
function defaultRoute(req, res, next) {
  const err = new CustomError(404, `伺服器端查無 ${req.method} ${req.originalUrl} 路由`)
  next(err)
}

module.exports = defaultRoute
