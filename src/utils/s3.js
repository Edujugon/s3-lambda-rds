const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

const getObject = key => {
  s3.getObject({
    Bucket: BUCKET_NAME,
    Key: key,
  }).promise();
}

module.exports = {
  getObject
}
