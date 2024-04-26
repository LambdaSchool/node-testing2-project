const db = require("../data/db-config.js")

async function createJoke(joke) {
    const [id] = await db("jokes").insert(joke)
    return db("jokes").where("joke_id",id).first()
}

async function deleteJoke(id) {
    const joke = await db("jokes").where("joke_id",id).first()
    await db("jokes").where("joke_id",id).del()
    return joke
}

module.exports = {
    createJoke,
    deleteJoke,
}