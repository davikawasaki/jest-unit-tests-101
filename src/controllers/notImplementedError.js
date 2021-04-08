const { HttpStatusCode } = require('../http');

const notImplementedError = async ctx => {
  ctx.status = HttpStatusCode.NotImplemented;
};

module.exports = {
  notImplementedError,
};
