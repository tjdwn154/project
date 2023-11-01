const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // cookie-parser 미들웨어 설정
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

// KOPIS API(박스오피스 정보) 요청 함수
const performanceListRouter = require("./api/performanceList");
app.use("/", performanceListRouter);

// KOPIS API(박스오피스 정보) 요청 함수
const boxofficeRouter = require("./api/boxofficeData");
app.use("/", boxofficeRouter);

// 공연 상세 API
const performanceRouter = require("./api/performanceData");
app.use("/", performanceRouter);

// 멤버 정보 라우팅
const memberRouter = require("./routes/member");
app.use("/", memberRouter);

// 리뷰 라우팅
const reviewRouter = require("./routes/reviews");
app.use("/", reviewRouter);

// 예약 라우팅
const reservationRouter = require("./routes/reservation");
app.use("/", reservationRouter);

// 회원가입 라우팅
const signupRouter = require("./routes/signup");
app.use("/", signupRouter);

// 로그인 라우팅
const loginRouter = require("./routes/login");
app.use("/", loginRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});
