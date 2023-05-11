const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create) // добавляем тип 
router.get('/', typeController.getAll) // получаем тип




module.exports = router