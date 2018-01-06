const reservations = require('./routes/reservations.router');
const users = require('./routes/users.router');
const instruments = require('./routes/intruments.router');
const rooms = require('./routes/rooms.router');

module.exports = {
  reservations,
  users,
  instruments,
  rooms,
};
