const Router = require('@koa/router');
const router = new Router();
const config = require('config');
const controllers = require('../controllers');

router.get(
  `${config.endpoints.userPayments}/:username`,
  controllers.getPayments,
);
router.post(config.endpoints.userPayments, controllers.notImplementedError);
router.put(config.endpoints.userPayments, controllers.notImplementedError);
router.delete(config.endpoints.userPayments, controllers.notImplementedError);

module.exports = router;
