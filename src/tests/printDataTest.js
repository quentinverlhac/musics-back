// const db = require('../models/database');
const models = require('../models/models');

const printData = async () => {
  const users = await models.user.findAll();
  users.map((user) => { console.log(user.getDataValue); });
};

module.exports = printData;
