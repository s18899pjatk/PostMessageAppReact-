const router = require("express").Router();
const db = require("../../db");
const authorization = require("../../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    //res.json(req.user);
    const user = await db
      .select("user_name", "user_id", "user_email")
      .from("users")
      .where({ user_id: req.user });
    res.send(user[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
