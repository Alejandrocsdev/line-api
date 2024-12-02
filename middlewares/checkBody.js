// 引用自訂錯誤模組
const CustomError = require('../errors/CustomError')

const checkBody = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)

    if (error) {
      next(new CustomError(400, error.details[0].message))
    } else {
      next()
    }
  }
}

module.exports = checkBody
