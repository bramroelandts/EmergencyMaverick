const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = require("../../models/Post");

//GET api/posts
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

// POST api/posts
router.post("/", (req, res) => {
  const newPost = new Post({
    text: req.body.text,
    name: req.body.name
  });

  newPost.save().then(post => res.json(post));
});

module.exports = router;
