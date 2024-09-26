const db = require('../../data/dbConfig')

const getAll = () => {
   return db('characters')
}

const getById =  (id) => {
   return db('characters').where('character_id', id).first()
}

const add = async (resource) => {
   const [id] = await db('characters').insert(resource)
   return db('characters').where('character_id', id).first()
}

const deleteChar = async (id) => {
   const charName = await db('characters').where('character_id', id).first()
   await db('characters').where('character_id', id).del()
   return charName
}

module.exports = {
   getAll,
   getById,
   add,
   deleteChar
}