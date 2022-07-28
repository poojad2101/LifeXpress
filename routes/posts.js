const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//create post
    router.post("/:id", async (req, res)=> {
        const newPost = new Post(req.body);
        try{
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (err) {
            res.status(500).json(err);
        }
    
        });

        //update post
    router.put("/:id", async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            if (post.username === req.body.username) {
              try {
                const updatedPost = await Post.findByIdAndUpdate(
                  req.params.id,
                  {
                    $set: req.body,
                  },
                  { new: true }
                );
                res.status(200).json(updatedPost);
              } catch (err) {
                res.status(500).json(err);
              }
            } else {
              res.status(401).json("You can update only your post!");
            }
          } catch (err) {
            res.status(500).json(err);
          }
        })

  

  //delete post

  //get post
  router.get("/:id", async (req, res) => {
    try{
        const user = await user.findById(req.param.id);
        const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});




  module.exports = router;