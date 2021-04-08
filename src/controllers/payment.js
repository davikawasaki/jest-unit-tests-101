const { paymentService } = require('../services');

const getPayments = async ctx => {
  ctx.body = await paymentService.renderPayments(ctx.params.username);
};

module.exports = {
  getPayments,
};
