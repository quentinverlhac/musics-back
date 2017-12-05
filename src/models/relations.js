const models = require('./models.js');

models.user.belongsToMany(models.room, { through: models.reservation });
models.room.belongsToMany(models.user, { through: models.reservation });

models.user.belongsToMany(models.instrument, { through: 'userInstrument' });
models.instrument.belongsToMany(models.user, { through: 'userInstrument' });

models.room.belongsToMany(models.instrument, { through: 'roomInstrument' });
models.instrument.belongsToMany(models.room, { through: 'roomInstrument' });

module.exports = models;
