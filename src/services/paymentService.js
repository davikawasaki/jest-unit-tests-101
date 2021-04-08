const userService = require('./userService');
const bankService = require('./bankService');

const renderPayments = async username => {
  if (!username) throw new Error('Missing username argument');

  const user = (await userService.getUser(username)) || {};
  let payments = await bankService.getPayments();
  payments = payments
    .filter(p => p.user === user.id)
    .map(p => {
      p.user = user;
      delete p.user.id;
      return p;
    });
  return payments || [];
};

module.exports = {
  renderPayments,
};
