const express = require("express");
const apiRoute = require("./routes/api/index.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5003;
// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api", apiRoute);
app.use(express.static("./postsapp/build"));

const path = require("path");
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "postsapp", "build", "index.html"));
});

app.listen(PORT, () => console.log(`listening ${PORT}`));
