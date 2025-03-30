const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

// 환경 변수 로드
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어 설정
app.use(cors()); // CORS 처리
app.use(morgan("dev")); // HTTP 요청 로깅
app.use(express.json()); // JSON 바디 파싱

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
