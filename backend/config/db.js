require("dotenv-flow").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // 로그 출력 비활성화화
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.error("DB 연결 실패: ", err);
  });

module.exports = sequelize;
