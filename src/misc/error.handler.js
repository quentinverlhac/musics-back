module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error: something went wrong while handling the request');
};

