const reservations = require('./routes/reservations.router');
const user = require('./routes/user.router');
const instruments = require('./routes/intruments.router');
const rooms = require('./routes/rooms.router');

module.exports = {
  reservations,
  user,
  instruments,
  rooms,
};
