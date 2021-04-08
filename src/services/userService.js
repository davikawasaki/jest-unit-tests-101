// todo: implement actual DB call

const users = [
  {
    id: 'bff126b2-fe4a-4374-8a6a-d2227d4bb54f',
    username: 'marcosrocha',
    name: 'Marcos Rocha',
    age: 25,
    payment: {
      card: {
        id: '9f0c962f-913c-4a5d-9c80-d5738c569588',
        type: 'credit',
        lastDigits: 1452,
      },
    },
  },
  {
    id: '30f8cdae-3d08-4802-8a91-792ec4dccb7d',
    username: 'mariaclara',
    name: 'Maria Clara',
    age: 29,
    payment: {
      card: {
        id: '74042eec-bc02-41dd-8167-16e77049c0ca',
        type: 'debit',
        lastDigits: 7241,
      },
    },
  },
];

const getUser = async username => {
  return users.find(u => u.username === username);
};

const getUsers = async => {
  return users;
};

module.exports = {
  getUser,
  getUsers,
};
