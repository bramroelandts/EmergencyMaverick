const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/User");

//GET api/users
router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nopostsfound: "No users found" }));
});

module.exports = router;
