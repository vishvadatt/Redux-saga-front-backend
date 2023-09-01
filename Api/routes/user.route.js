const router = require('express').Router();
const userCtrl = require('../controllers/user.controller');
const { protect } = require('../middleware/auth');
const { uploadS3 } = require('../helpers/commonfile');

router.route('/get-users').get(userCtrl.getAllUsers);
router.route('/update-user/:id').put(userCtrl.updateUser);
router.route('/delete-user/:id').delete(userCtrl.deleteUser);
router.route('/findone-user/:id').get(userCtrl.fineOneUser);

module.exports = router;