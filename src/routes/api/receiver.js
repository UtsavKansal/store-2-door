var router = require('express').Router();
var receiverController = require('../../controllers/receiverController');

router.get('/:receiverId', receiverController.get_receiver_by_id);
router.get('/profiles', receiverController.get_all_receiver_profiles);
router.get('/profiles/num-order', receiverController.get_all_receiver_profiles);
router.get('/', receiverController.get_all_receivers);
router.post('/order-request/:requestId/:receiverId', receiverController.order_request);
router.post('/', receiverController.create_receiver);

module.exports = router;
