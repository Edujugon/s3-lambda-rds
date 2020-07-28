const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const BUCKET_NAME = process.env.BUCKET_NAME;

const getObject = key => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: key
  };
  
  s3.getObject(params).promise();
}

module.exports = {
  getObject
}
