const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration) //путь для регистрации
router.post('/login', userController.login) // путь для авторизации
router.get('/auth', authMiddleware, userController.check)  // метод проверяющий авторизацию 




module.exports = router