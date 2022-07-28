const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//update
router.put("/:id", async (req, res)=> {
    if(req.body.userId === req.params.id) {
        if(req.body.password) {
            const salt = await bycrypt.gensalt(10);
            req.body.password = await bycrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                  $set: req.body,
                },
                { new: true }
              );
              res.status(200).json(updatedUser);
            } catch (err) {
              res.status(500).json(err);
            }
          } else {
            res.status(401).json("You can update only your account!");
          }
        });