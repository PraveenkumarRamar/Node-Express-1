const Express = require('express');
const router =  Express.Router()
const{getUser}  = require('../controller/users/index')

router.get('/',getUser)

module.exports = router