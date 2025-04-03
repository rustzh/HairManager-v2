const { DataTypes } = require("sequelize");
const sequelize = require("@/config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true, // 유니크한 값이어야 함
    },
    username: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    refreshtoken: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "users", // 테이블명
    timestamps: false, // createdAt, updatedAt 컬럼을 사용하지 않으면 false로 설정
  }
);

module.exports = User;
