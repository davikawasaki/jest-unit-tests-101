const Koa = require('koa');
const cors = require('@koa/cors');
const config = require('config');
const payment = require('../routes/payment');

const app = new Koa();

const start = async () => {
  const corsOptions = {
    origin: '*',
  };

  app.use(cors(corsOptions));
  app.use(payment.routes());

  const PORT = process.env.PORT || config.port || 443;

  return app.listen(PORT, () => {
    console.info(`Server listening on port: ${PORT}`);
  });
};

module.exports = start;
