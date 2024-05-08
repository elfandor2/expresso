const router = require('express').Router()
const {ItemsController} = require('../controllers/items-controller')

const itemController = new ItemsController()

router.get('/items', itemController.getItems)
router.post('/items', itemController.postItem)

module.exports = router