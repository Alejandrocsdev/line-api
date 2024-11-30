const Joi = require('joi')

class UsersSchema {
  postUser = Joi.object({
    username: Joi.string().alphanum().min(12).max(20).required().messages({
      'string.base': '帳號應為字串',
      'string.alphanum': '帳號只能包含字母和數字',
      'string.empty': '帳號不可為空字串',
      'string.min': '帳號長度應至少為 12 個字符',
      'string.max': '帳號長度應不超過 20 個字符',
      'any.required': '缺少帳號'
    }),
    email: Joi.string().email().max(254).required().messages({
      'string.base': '電郵應為字串',
      'string.email': '無效的電郵格式',
      'string.empty': '電郵不可為空字串',
      'string.max': '電郵長度應不超過 254 個字符',
      'any.required': '缺少電郵'
    }),
    age: Joi.number().integer().min(18).max(99).required().messages({
      'number.base': '年齡應為數字',
      'number.integer': '年齡應為整數',
      'number.min': '年齡應大於或等於 18 歲',
      'number.max': '年齡應小於或等於 99 歲',
      'any.required': '缺少年齡'
    })
  })

  putUser = Joi.object({
    username: Joi.string().alphanum().min(12).max(20).required().messages({
      'string.base': '帳號應為字串',
      'string.alphanum': '帳號只能包含字母和數字',
      'string.empty': '帳號不可為空字串',
      'string.min': '帳號長度應至少為 12 個字符',
      'string.max': '帳號長度應不超過 20 個字符',
      'any.required': '缺少帳號'
    }),
    email: Joi.string().email().max(254).required().messages({
      'string.base': '電郵應為字串',
      'string.email': '無效的電郵格式',
      'string.empty': '電郵不可為空字串',
      'string.max': '電郵長度應不超過 254 個字符',
      'any.required': '缺少電郵'
    }),
    age: Joi.number().integer().min(18).max(99).required().messages({
      'number.base': '年齡應為數字',
      'number.integer': '年齡應為整數',
      'number.min': '年齡應大於或等於 18 歲',
      'number.max': '年齡應小於或等於 99 歲',
      'any.required': '缺少年齡'
    })
  })
}

module.exports = new UsersSchema()
