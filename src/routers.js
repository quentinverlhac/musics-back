const reservations = require('./routes/reservations.router');
const user = require('./routes/user.router');
const instruments = require('./routes/intruments.router');

module.exports = {
  reservations,
  user,
  instruments,
};
