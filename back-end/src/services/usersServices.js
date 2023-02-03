const { Users } = require('../database/models');

async function getAllUsers() {
  const response = await Users.findAll();
  return response;
}

module.exports = { getAllUsers };
