const axios = require('axios');
const config = require('config');

const getPayments = async () => {
  const response = await axios.get(`${config.services.bankApi.url}/payments`);
  return response.data || [];
};

module.exports = {
  getPayments,
};
