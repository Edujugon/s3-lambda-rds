const s3 = require('../../utils/s3');
const { asyncForEach } = require('../../utils/async');

const s3ToRDS = async event => {
  await asyncForEach(event.Records, async record => {
    const filename = record.s3.object.key;
    const content = await s3.getObject(filename);

    // TODO
    // Prepare SQL statement
    // Write to RDS
  })
}

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
};


module.exports = {
  s3ToRDS
}