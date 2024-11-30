const { BaseError } = require('sequelize')
const CustomError = require('../errors/CustomError')

// 全域錯誤中間件
function globalError(err, req, res, next) {
  console.error(err)

  // 處理 Sequelize 錯誤
  if (err instanceof BaseError) {
    return res.status(500).json({ type: `資料庫錯誤(${err.name})`, message: err.message })
  }

  // 處理自訂錯誤
  if (err instanceof CustomError) {
    let type = ''

    if (err.code >= 400 && err.code < 500) {
      type = '用戶端錯誤'
    } else if (err.code >= 500) {
      type = '伺服器錯誤'
    } else {
      type = '未知錯誤'
    }
    
    return res.status(err.code).json({ type, message: err.message })
  }

  // 處理其他錯誤
  res.status(500).json({ type: '伺服器錯誤', message: err.message })
}

module.exports = globalError

// AggregateError
// AssociationError
// BulkRecordError
// ConnectionError
// DatabaseError
// EagerLoadingError
// EmptyResultError
// InstanceError
// OptimisticLockError
// QueryError
// SequelizeScopeError
// ValidationError
