const axios = require('axios');
const querystring = require('querystring');

const config = require('../../config');

module.exports = (req, res) => {
  if (typeof req.body.code === 'undefined') {
    res.status(400);
    res.send('error');
  } else {
    axios.post(config.oauth.token, querystring.stringify({
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: config.oauth.redirect_uri,
      client_id: config.oauth.client_id,
      client_secret: config.oauth.client_secret,
    })).then(({ data }) => {
      res.json({
        access_token: data.access_token,
        expires_at: data.expires_at,
      });
    }).catch(err => console.log(err));
  }
};

