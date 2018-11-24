const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../../models/Message");

//GET api/posts
router.get("/", (req, res) => {
  Message.find()
    .sort({ date: -1 })
    .then(message => res.json(message))
    .catch(err => res.status(404).json({ nopostsfound: "No message found" }));
});

// POST api/posts
router.post("/", (req, res) => {
  const newMessage = new Message({
    message: req.body.message
  });

  newMessage.save().then(message => res.json(message));
});

module.exports = router;
