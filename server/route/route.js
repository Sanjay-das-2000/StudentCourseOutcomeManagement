const router = require('express').Router();
const userController = require("../controller/user-controller");

router.post('/getuserStatus', userController.getUserStatus);
router.post('/getusers', userController.getUsers);
router.post('/', userController.addUser);
router.post("/addCOofUsers",userController.addCOofUsers);
router.post("/getCOdata",userController.getCOdata);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;