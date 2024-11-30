require('dotenv').config()

module.exports = {
  development: {
    username: process.env.MYSQL_DEV_USERNAME,
    password: process.env.MYSQL_DEV_PASSWORD,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_DEV_HOST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.MYSQL_PRO_USERNAME,
    password: process.env.MYSQL_PRO_PASSWORD,
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_PRO_HOST,
    dialect: 'mysql'
  }
}
