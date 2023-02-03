const { getAllUsers } = require('../services/usersServices');


async function allUsers(req, res) {
  try {
    const response = await getAllUsers();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json(e.message)
  }
}

module.exports = { allUsers }