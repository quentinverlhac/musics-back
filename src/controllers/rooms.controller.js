const models = require('../models/relations');
const searchAvailableRooms = require('../misc/search.available.rooms');

// Get the information about every room
async function getAllRooms(req, res, next) {
  try {
    const rooms = await models.room.findAll({
      include: [models.instrument],
    });
    res.send(rooms);
  } catch (e) {
    next(e);
  }
}

// Get the available rooms for the selected date
async function getAllAvailableRooms(req, res, next) {
  try {
    const availableRooms = await searchAvailableRooms.search(req.body.beginning, req.body.end);
    console.log(`in controller: ${availableRooms}`);
    res.send(availableRooms);
  } catch (e) {
    next(e);
  }
}

// Get the information about the room which id given in the url
async function getRoom(req, res, next) {
  try {
    const room = await models.room.findById(req.params.roomId, {
      include: [models.instrument],
    });
    res.send(room);
  } catch (e) {
    next(e);
  }
}

// Update the information of the room which id is given in the url
async function updateRoom(req, res, next) {
  try {
    const room = await models.room.findById(req.params.roomId);
    room.capacity = req.body.capacity;
    room.photoPath = req.body.photoPath;
    room.purpose = req.body.purpose;
    room.restricted = req.body.restricted;
    await room.save();
    res.send(room);
  } catch (e) {
    next(e);
  }
}

// Add the given instrument to the room which id is given in the url
async function addRoomInstrument(req, res, next) {
  try {
    const room = await models.room.findById(req.params.roomId);
    const instrument = await models.instrument.findById(req.body.instrumentId);
    await room.addInstrument(instrument, { through: { } });
    const roomInstruments = await models.room.findById(req.params.roomId, {
      include: [models.instrument],
    });
    res.send(roomInstruments);
  } catch (e) {
    next(e);
  }
}

// Delete the given instrument from the room which id is given in the url
async function deleteRoomInstrument(req, res, next) {
  try {
    const room = await models.room.findById(req.params.roomId, {
      include: [models.instrument],
    });
    const instrument = await models.instrument.findById(req.body.instrumentId);
    await room.removeInstrument(instrument, { through: { } });
    const roomInstruments = await models.room.findById(req.params.roomId, {
      include: [models.instrument],
    });
    res.send(roomInstruments);
  } catch (e) {
    next(e);
  }
}


module.exports = {
  getAllRooms,
  getAllAvailableRooms,
  getRoom,
  updateRoom,
  addRoomInstrument,
  deleteRoomInstrument,
};
