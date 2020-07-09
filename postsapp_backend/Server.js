const express = require("express");
const apiRoute = require("./routes/api");
const port = 5003;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api", apiRoute);

app.listen(port, () => console.log(`listeting ${port}`));
