const AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis({ region: 'us-west-2' });

const StreamName = 'toll-records';

(async function () {
  const params = {
    StreamName,
    ShardCount: 1,
  };

  await kinesis.createStream(params).promise();

  const streamData = await kinesis
    .waitFor('streamExists', { StreamName })
    .promise();

  console.log({ streamData });
})();
