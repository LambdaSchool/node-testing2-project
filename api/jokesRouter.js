const express = require("express")
const router = express.Router()
const Joke = require("./jokesModel.js")

router.delete("/:id", async (req,res) => {
    const id = req.params.id
    const delJoke = await Joke.deleteJoke(id)
    res.status(200).json(delJoke)
})

module.exports = router