const jwt = require('jsonwebtoken');
const config = require('../../../config');

/**
 * midleware function checks if user is authorized
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const authRequired = (req, res, next) => {
  const token = req.headers.cookie;

  if (!token) {
    return res.redirect('/signin');
  }

  const tokenValue = token.split('=')[1].split(';')[0];
  let decoded = '';
  try {
    decoded = jwt.verify(tokenValue, config.secretKey);
  } catch (e) {
    res.clearCookie('Authorization');
    return res.redirect('/signin');
  }

  req.userId = decoded.id;

  return next();
};

module.exports = { authRequired };
