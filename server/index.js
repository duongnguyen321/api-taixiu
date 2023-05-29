const express = require("express");

const app = express();

app.use("/", require("../routes"));

const port = process.env.PORT || 3000; // Sử dụng cổng được cung cấp bởi Heroku hoặc mặc định là 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
