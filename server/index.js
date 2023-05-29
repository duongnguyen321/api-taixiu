const express = require("express");

const app = express();

app.use("/game", require("../routes"));

app.listen(3000);
