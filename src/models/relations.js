const models = require('./models.js');

models.user.hasMany(models.reservation);
models.reservation.belongsTo(models.user);

models.room.hasMany(models.reservation);
models.reservation.belongsTo(models.room);

models.user.belongsToMany(models.instrument, { through: 'userInstrument' });
models.instrument.belongsToMany(models.user, { through: 'userInstrument' });

models.room.belongsToMany(models.instrument, { through: models.roomInstrument });
models.instrument.belongsToMany(models.room, { through: models.roomInstrument });

module.exports = models;
