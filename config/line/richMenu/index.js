const line = require('../')

const path = require('path')
const fs = require('fs')

const richMenu = {
  size: {
    width: 2500,
    height: 1686
  },
  selected: false,
  name: 'Test the default rich menu',
  chatBarText: 'Tap to open',
  areas: [
    {
      bounds: {
        x: 0,
        y: 0,
        width: 1666,
        height: 1686
      },
      action: {
        type: 'uri',
        label: 'Tap area A',
        uri: 'https://developers.line.biz/en/news/'
      }
    },
    {
      bounds: {
        x: 1667,
        y: 0,
        width: 834,
        height: 843
      },
      action: {
        type: 'uri',
        label: 'Tap area B',
        uri: 'https://lineapiusecase.com/en/top.html'
      }
    },
    {
      bounds: {
        x: 1667,
        y: 844,
        width: 834,
        height: 843
      },
      action: {
        type: 'uri',
        label: 'Tap area C',
        uri: 'https://techblog.lycorp.co.jp/en/'
      }
    }
  ]
}

// ;(async () => {
//   try {
//     const richMenuId = await line.client.createRichMenu(richMenu)
//     console.log(`Rich Menu created with ID: ${JSON.stringify(richMenuId)}`);
//   } catch (err) {
//     console.error('Error creating Rich Menu:', err.message)
//   }
// })()

// ;(async () => {
//   try {
//     const imagePath = path.resolve(__dirname, './richmenu.jpg')
//     const imageStream = fs.createReadStream(imagePath)
//     const richMenuId = 'richmenu-9e893448fed8aef3f22915756f15230b'
//     await line.client.setRichMenuImage(richMenuId, imageStream)
//     console.log('Rich Menu image uploaded successfully.')
//   } catch (err) {
//     console.error('Error setting Rich Menu Image:', err.message)
//   }
// })()

// ;(async () => {
//   try {
//     const richMenus = await line.client.getRichMenuList() // Fetch all Rich Menus
//     console.log('Rich Menus:', richMenus)

//     // Example: Display each Rich Menu ID and details
//     richMenus.richmenus.forEach(menu => {
//       console.log(`Rich Menu ID: ${menu.richMenuId}`)
//       console.log(`Name: ${menu.name}`)
//       console.log(`Chat Bar Text: ${menu.chatBarText}`)
//       console.log(`Size: ${JSON.stringify(menu.size)}`)
//     })
//   } catch (err) {
//     console.error('Error fetching Rich Menus:', err.message)
//   }
// })()

;(async () => {
  try {
    const richMenuId = 'richmenu-95edba84ae38ed51d5b586bf62c68050'
    // await line.client.validateRichMenuObject(richMenu);

    await line.client.setDefaultRichMenu(richMenuId)
    console.log(`Rich Menu with ID ${richMenuId} is now set as the default.`)
  } catch (error) {
    console.error(error)
    console.error('Error setting default Rich Menu:', error.message)
  }
})()
