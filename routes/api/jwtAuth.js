const express = require("express");
const router = express.Router();
const db = require("../../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../../utils/jwtGenerator");
const validInfo = require("../../middleware/validInfo");
const authorization = require("../../middleware/authorization");
// register
router.post("/register", validInfo, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await db
      .select("*")
      .from("users")
      .where({ user_email: email });

    if (user[0] !== undefined) {
      return res.status(401).json("user already exists");
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await db
      .insert({
        user_name: name,
        user_email: email,
        user_password: bcryptPassword,
      })
      .returning("*")
      .into("users")
      .then((data) => {
        const token = jwtGenerator(data[0].user_id);
        res.json({ token });
      });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// login
router.post("/login", validInfo, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db
      .select("*")
      .from("users")
      .where({ user_email: email });

    if (user[0] === undefined) {
      return res.status(401).json("Password or email is not correct");
    }

    const validPassword = await bcrypt.compare(password, user[0].user_password);
    if (!validPassword) {
      return res.status(401).json("Password or email is not correct");
    }

    const token = jwtGenerator(user[0].user_id);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

// get user with given id
router.get("/:id", async (req, res) => {
  try {
    await db
      .select()
      .from("users")
      .where({ user_id: req.params.id })
      .then((data) => {
        res.send(data);
      });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
