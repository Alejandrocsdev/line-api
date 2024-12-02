require('dotenv').config()

const express = require('express')
const ngrok = require('ngrok')
const cors = require('cors')
const cookieParser = require('cookie-parser')

// const { corsOptions, jsonOptions } = require('./utils')
const { jsonOptions } = require('./utils')
const { defaultRoute, globalError } = require('./middlewares')
const routes = require('./routes')

const app = express()
const port = process.env.PORT

// 中間件
app.use(express.json(jsonOptions))
app.use(cors('*'))
app.use(cookieParser())

// 路由
app.get('/favicon.ico', (req, res) => res.status(204))
app.get('/', (req, res) => res.status(200).json({ message: '伺服器運行中', status: 'ok' }))
app.use('/api', routes)

// 未知路由
app.all('*', defaultRoute)

// 全域錯誤
app.use(globalError)

// 伺服器啟動
const server = app.listen(port, async () => {
  console.info(`Express伺服器運行於端口: ${port}`)
  if (process.env.NODE_ENV === 'development') {
    try {
      global.ngrokUrl = await ngrok.connect({
        authtoken: process.env.NGROK_AUTH_TOKEN,
        addr: port
      })
      console.info(`Ngrok通道開啟於: ${global.ngrokUrl}`)
    } catch {
      console.error('啟動ngrok時發生錯誤:')
    }
  }
})

// 伺服器錯誤監聽
server.on('error', error => {
  if (error.code === 'EADDRINUSE') {
    console.error(`端口 ${port} 已被佔用`)
  } else {
    console.error('伺服器錯誤:', error)
  }
})
