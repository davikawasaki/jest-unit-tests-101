'use strict'

module.exports = {
  endpoints: {
    userPayments: '/payments/users',
  },
  services: {
    bankApi: {
      url: 'https://6064ef4ff091970017786d79.mockapi.io/api/v1'
    }
  },
  port: 8080
};
