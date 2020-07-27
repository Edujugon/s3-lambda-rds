'use strict';

const { s3ToRDS } = require('./s3-to-rds');

const ERROR_MESSAGE = 'Error loading file/s';

module.exports.s3ToRDS = async (event, context, callback) => {

  try {
    s3ToRDS(event);

    callback(null, 'File/s successfully loaded');

  } catch (e) {
    console.log(ERROR_MESSAGE);

    callback(ERROR_MESSAGE);
  }
};
