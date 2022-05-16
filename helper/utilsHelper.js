const moment = require('moment');

exports.timestamp = function () {
  return moment().unix();
};