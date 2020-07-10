const express = require("express");
const apiRoute = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5003;
// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"postsapp/public")))
}
app.use("/api", apiRoute);

app.listen(PORT, () => console.log(`listeting ${PORT}`));
