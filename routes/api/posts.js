const express = require('express');
const router = express.Router();
const db = require("../../db")
// routes
// create comment
router.post("/", async (req, res) => {
    try {
      await db.insert(req.body).returning("*").into("post").then((data) => {
        res.send(data)
      })
    } catch (error) {
      console.error(error.message);
    }
  });
  
  // get all posts
  router.get("/", async (req, res) => {
    try {
        await db.select().from('post').then((data) => {
            res.send(data);
        });
    } catch (error) {
      console.error(error.message);
    }
  });
  
  // get comment
  router.get("/:id", async (req, res) => {
    try {
    
      await db.select().from('post').where({post_id : req.params.id}).then((data) => {
        res.send(data)
      });
    } catch (error) {
      console.error(error.message);
    }
  });
  // update comment
  router.put("/:id", async (req, res) => {
    try {
      await db('post').where({post_id: req.params.id }).update(req.body).returning("*").then((data) => {
        res.send(data);
      })
    } catch (error) {
      console.error(error.message);
    }
  });
  // delete comment
  router.delete("/:id", async (req, res) => {
    try {

      await db('post').where({post_id: req.params.id }).delete(req.body).returning("*").then((data) => {
        res.send(data);
      });
    
    } catch (error) {
      console.log(error.message);
    }
  });

module.exports = router;