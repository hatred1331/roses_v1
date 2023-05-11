const Router = require('express')
const router = new Router()
const productController = require('../controllers/productConroller')



router.post('/', productController.create) // добавляем тип 
router.get('/', productController.getAll) // получаем тип
router.get('/:id', productController.getOne) //получаем айди продукта




module.exports = router




