const { Router } = require('express')
const router = Router()

const richMenuController = require('../../../../controllers/line/messaging/richMenuController')

const { upload } = require('../../../../middlewares')

router.post('/:richMenuId/default/all', richMenuController.setDefaultRichMenu)
router.post('/:richMenuId/content', upload, richMenuController.setRichMenuImage)
router.get('/list', richMenuController.getRichMenuList)
router.post('/validate', richMenuController.validateRichMenuObject)
router.delete('/all', richMenuController.deleteAllRichMenu)
router.get('/:richMenuId', richMenuController.getRichMenu)
router.delete('/:richMenuId', richMenuController.deleteRichMenu)
router.post('/', richMenuController.createRichMenu)

module.exports = router

// Image format: JPEG or PNG
// Image width: 800 to 2500 pixels
// Image height: 250 pixels or more
// Image aspect ratio (width / height): 1.45 or more
// Max file size: 1 MB

// 1. Validate the rich menu object
// 2. Create a rich menu
// 3. Upload and attach the rich menu image
// 4. Set the default rich menu
