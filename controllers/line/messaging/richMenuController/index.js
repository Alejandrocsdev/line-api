// 引用異步錯誤中間件
const { asyncError } = require('../../../../middlewares')
// 引用自訂錯誤模組
const CustomError = require('../../../../errors/CustomError')
// 引用自訂 Line SDK
const { Line } = require('../../../../config/line')
// 引用工具模組
const { imageDetails } = require('../../../../utils')

class RichMenuController extends Line {
  constructor() {
    super()
  }

  // new
  validateRichMenuObject = asyncError(async (req, res) => {
    const richMenuObject = req.body
    await this.newClient.validateRichMenuObject(richMenuObject)
    res.status(200).json({ message: '圖文選單物件驗證成功' })
  })

  createRichMenu = asyncError(async (req, res) => {
    const richMenuObject = req.body
    const { richMenuId } = await this.newClient.createRichMenu(richMenuObject)
    res.status(200).json({ message: '圖文選單建立成功', richMenuId })
  })

  getRichMenuList = asyncError(async (req, res) => {
    const { richmenus } = await this.newClient.getRichMenuList()
    const count = richmenus.length
    res.status(200).json({ message: '成功取得所有圖文選單清單', result: { richmenus, count } })
  })

  getRichMenu = asyncError(async (req, res) => {
    const { richMenuId } = req.params
    const richmenu = await this.newClient.getRichMenu(richMenuId)
    res.status(200).json({ message: `成功取得圖文選單, ID: ${richMenuId}`, richmenu })
  })

  setDefaultRichMenu = asyncError(async (req, res) => {
    const { richMenuId } = req.params
    const result = await this.newClient.setDefaultRichMenu(richMenuId)
    res.status(200).json({ message: `成功設置圖文選單, ID: ${richMenuId}`, result })
  })

  // old
  setRichMenuImage = asyncError(async (req, res) => {
    const { richMenuId } = req.params

    if (!req.file || !req.file.buffer) {
      throw new CustomError(400, '沒有收到圖片檔案')
    }

    // Image format: JPEG or PNG
    // Image width: 800 to 2500 pixels
    // Image height: 250 pixels or more
    // Image aspect ratio (width / height): 1.45 or more
    // Max file size: 1 MB

    const details = imageDetails(req.file.buffer)
    const {
      width,
      height,
      type,
      size: { mb },
      aspectRatio
    } = details
    if (type !== 'jpeg' && type !== 'jpg' && type !== 'png') {
      throw new CustomError(400, '圖片格式錯誤, 只接受 JPEG 或 PNG 格式')
    }
    if (width < 800 || width > 2500) {
      throw new CustomError(400, '圖片寬度錯誤, 寬度需介於 800 到 2500 之間')
    }
    if (height < 250) {
      throw new CustomError(400, '圖片高度錯誤, 高度需大於 250')
    }
    if (aspectRatio < 1.45) {
      throw new CustomError(400, '圖片比例錯誤, 寬高比需大於 1.45')
    }
    if (mb > 1) {
      throw new CustomError(400, '圖片檔案過大, 檔案大小需小於 1 MB')
    }

    const { Readable } = require('stream')
    const imageStream = Readable.from(req.file.buffer)

    const result = await this.oldClient.setRichMenuImage(richMenuId, imageStream)
    res.status(200).json({ message: `成功設置圖文選單圖片, ID: ${richMenuId}`, result })
  })

  deleteRichMenu = asyncError(async (req, res) => {
    const { richMenuId } = req.params
    await this.oldClient.deleteRichMenu(richMenuId)
    res.status(200).json({ message: `成功刪除圖文選單, ID: ${richMenuId}` })
  })

  deleteAllRichMenu = asyncError(async (req, res) => {
    const { richmenus } = await this.newClient.getRichMenuList()

    if (!richmenus || richmenus.length === 0) {
      return res.status(200).json({ message: '無圖文選單可刪除' })
    }

    for (const richmenu of richmenus) {
      await this.oldClient.deleteRichMenu(richmenu.richMenuId)
      console.log(`成功刪除圖文選單 ID: ${richmenu.richMenuId}`)
    }

    res.status(200).json({ message: `成功刪除所有圖文選單, 共刪除 ${richmenus.length} 個` })
  })
}

module.exports = new RichMenuController()
