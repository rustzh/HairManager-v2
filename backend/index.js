require("dotenv-flow").config();
require("module-alias/register");
require("@config/db");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const morgan = require("morgan");
const routes = require("@routes");

const app = express();

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));

// 기본 라우트
app.use("/api", routes);

// build (경로 설정 추후 필요)
app.use(express.static(path.join(__dirname, "@frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "@frontend/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
