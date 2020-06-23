const AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis({ region: '' });

const StreamName = '';

(async function () {
  const params = {};

  await kinesis.createStream().promise();

  const streamData = await kinesis
    .waitFor('streamExists', { StreamName })
    .promise();

  console.log({ streamData });
})();
