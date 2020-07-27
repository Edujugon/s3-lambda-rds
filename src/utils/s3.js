const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

const getObject = name => {
  s3.getObject({
    Bucket: BUCKET_NAME,
    Key: name,
  }).promise();
}

module.exports = {
  getObject
}