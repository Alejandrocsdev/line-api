const isProduction = process.env.NODE_ENV === 'production'

const backUrl = isProduction ? process.env.BACK_PRO_BASE_URL : process.env.BACK_DEV_BASE_URL
const frontUrl = isProduction ? process.env.FRONT_PRO_BASE_URL : process.env.FRONT_DEV_BASE_URL

module.exports = { backUrl, frontUrl }
