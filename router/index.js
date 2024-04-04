const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandlers")
const { UserController } = require("../controllers/userControllers")

router.use(errorHandler);
router.get('/user', UserController.listUser)

module.exports = router;
