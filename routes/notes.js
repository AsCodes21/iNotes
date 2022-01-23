const express = require('express');
const Router = express.Router();
const notes = require('../models/Notes'); 

Router.get('/',async (req,res)=>{
    const note = await notes(req.body);
    res.send("Trying to send,body is ejected successfully.");
    console.log("Running hope for the best..")
    console.log(req.body)
    await note.save();
    res.send("Successfully done")
});

module.exports = Router;