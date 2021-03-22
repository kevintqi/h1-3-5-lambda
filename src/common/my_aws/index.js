const AWS = require('aws-sdk');
const awsConfig = require('./src/data/awsconfig.json');

AWS.config.update(awsConfig);
module.exports = AWS;