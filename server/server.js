const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// 멤버 정보 가져오기 라우팅
const memberRouter = require("./routes/member");
app.use("/", memberRouter);

// 회원가입 라우팅
const signupRouter = require("./routes/signup");
app.use("/", signupRouter);

// 로그인 라우팅
const loginRouter = require("./routes/login");
app.use("/", loginRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
