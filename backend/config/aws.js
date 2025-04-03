const aws = require("aws-sdk");
const AWS_REGION = require("./env");

// AWS 설정
const s3 = new aws.S3({
  // accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  //   region: AWS_REGION,
});

module.exports = { s3 };
