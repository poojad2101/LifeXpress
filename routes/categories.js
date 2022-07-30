const router = require("express").Router();
const Category = require("../models/Category");

//create categories
router.post("/", async (req, res)=> {
    const newCat = new Category(req.body);
    try{
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }

    });


    //get all categories
    router.het("/", async (req, res)=> {
        const cats = await Category.find();
        try{
            const savedCat = await newCat.save();
            res.status(200).json(cats);
        } catch (err) {
            res.status(500).json(err);
        }
    
        });
    



    module.exports = router;