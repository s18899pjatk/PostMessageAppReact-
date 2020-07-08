const express = require("express");
const app = express();
const port = 5003;
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// routes
// create comment
app.post("/create", async (req, res) => {
  try {
    const { txt_content } = req.body;
    const newTxt = await pool.query(
      "INSERT INTO post (txt_content) VALUES($1) RETURNING *",
      [txt_content]
    );
    res.json(newTxt.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// get all posts
app.get("/posts", async (req, res) => {
  try {
    const allPosts = await pool.query("SELECT * FROM post");
    res.json(allPosts.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get comment
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const txt = await pool.query("SELECT * FROM post WHERE post_id = $1", [id]);
    res.json(txt.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
// update comment
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { txt_content } = req.body;
    console.log(txt_content);
    const updatePost = await pool.query(
      "UPDATE post SET txt_content = $1 WHERE post_id = $2",
      [txt_content, id]
    );
    res.json("updated");
  } catch (error) {
    console.error(error.message);
  }
});
// delete comment
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await pool.query("DELETE FROM post WHERE post_id = $1", [
      id,
    ]);
    res.json("post has been deleted");
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/", (req, res) => res.send("Hey bitch"));
app.get("/endp", (req, res) => res.send("Hey another endp"));
app.listen(port, () => console.log(`listeting ${port}`));
